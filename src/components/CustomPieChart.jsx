import React, { useEffect, useRef } from 'react';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';


const CustomPieChart = (props) => {
  const chartRef = useRef(null);


  const data = {
    
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
    },
  };
  

  useEffect(() => {
    // Cleanup chart instance on component unmount
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div style={{ width: '50%', margin: '0 auto' }}>
      <Pie ref={chartRef} data={data} options={options} />
    </div>
  );
};

CustomPieChart.defaultProps={
    label:['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],

}

export default CustomPieChart;
