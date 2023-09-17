import React, { useState, useEffect } from 'react';
import axios from 'axios';
function DisplayList() {
  const [data, setData] = useState([]);
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Replace with your API endpoint

  useEffect(() => {
    const sendPostRequest=async ()=>{

 await axios.get(apiUrl).then((response) =>
 {
  setData(response.data);
 }).catch((error) =>{
  console.error('Error fetching data:', error);
 })
    } 
    sendPostRequest();
  }, []);
  

  return (
    <div>
      <h1>API Response Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.userId}</li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayList;