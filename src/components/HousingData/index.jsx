import axios from 'axios';
import React, { useEffect, useState } from 'react'

const HousingData = () => {

  const ApiURL = "http://localhost:3000/housings"

  const [apiData, setApiData] = useState([]);

  const getApi = () => {
    axios.get(ApiURL).then((res) => setApiData(res.data));
  };
  useEffect(() => getApi(), []);

  return (
    <div>
      <h1>Les maisons :</h1>
        {
        apiData
        .map((housing) => (
          <h2 key={housing.id}>{housing.title}</h2>
        ))
      }
    </div>
  )
}

export default HousingData