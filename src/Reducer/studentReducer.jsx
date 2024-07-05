const StudentReducer=(state,action)=>{
    switch(action.type){
        case "SET_STUDENT_DATA": {
            return {
                ...state,
                isLoading:false,
                studentData:action.payload
            }
        }
        case "SET_SINGLE_STUDENT":{
            return{
                ...state,
                isLoading:false,
                singleStudent:action.payload
            }
        }
        case "API_ERROR":{
            return {
                ...state,
                isLoading:false,
                isError:true
            }
        }
        case "SET_LOADING":{
            return{
                ...state,
                isLoading:true,
                isError:false
            }
        }
        case "SET_ISADDING":{
            return{
                ...state,
                isAdding:!state.isAdding
            }
        }
        case "SET_ISVIEW":{
            return{
                ...state,
                isAdding:!state.isView
            }
        }

        default:{
            return state;
        }
    }
}

export default StudentReducer