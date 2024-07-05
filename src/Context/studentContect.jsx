import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import reducer from "../Reducer/studentReducer";

const AppContext = createContext();

let API = "http://localhost:5000/";

let initialState = {
  isLoading: false,
  isError: false,
  studentData: [],
  singleStudent:{},
  isAdding: false,
  isView:false,
};

const StudentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getStudent = async (url) => {
    try {
      const res = await axios.get(url);
      const students = await res.data;
      await dispatch({ type: "SET_STUDENT_DATA", payload: students });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  const getStudentById=async(id)=>{
    await dispatch({ type: "SET_LOADING" });
    try{
        const res=await axios.get(`${API}student/${id}`);
        const data=await res.data;
        await dispatch({type:"SET_SINGLE_STUDENT",payload:data})
    }catch(error){
        dispatch({ type: "API_ERROR" });
    }
  }

  const setIsAdding = async () => {
    try {
      await dispatch({ type: "SET_ISADDING" });
    } catch (error) {
      dispatch({ type: "API_ERROR", payload: initialState.isAdding });
    }
  };
  const setIsView = async () => {
    try {
      await dispatch({ type: "SET_ISVIEW" });
    } catch (error) {
      dispatch({ type: "API_ERROR", payload: initialState.isAdding });
    }
  };
  useEffect(() => {
    getStudent(`${API}student`);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getStudent, setIsAdding, setIsView,getStudentById }}>
      {children}
    </AppContext.Provider>
  );
};

const useStudentContext = () => {
  return useContext(AppContext);
};

export { StudentProvider, AppContext, useStudentContext };
