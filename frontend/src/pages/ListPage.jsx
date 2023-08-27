import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

function ListPage({ query }) {
const [data, setData] = useState([]);

  useEffect(() => {
    const apiUrl = `http://localhost:5000/flights?from=${query.from}&to=${query.to}&departDate=${query.departDate}`;

    // Make the API request
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then(apiData => {
        setData(apiData); 
        console.log(data);
        data.forEach(item => {
            const listItem = document.createElement('div');
            listItem.textContent = item.from; 
            document.getElementById('list').appendChild(listItem);
      });
      })
      .catch(error => {
        console.error('API fetch error:', error);
      });
  }, [query]); 
  
      

  return (
    <>
        <div id="list" className='data-list'>

        </div>
    </>
  )
}

export default ListPage