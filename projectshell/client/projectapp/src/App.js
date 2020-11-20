import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios"
import Card from "./Components/Card";
import List from "./Components/List";

const App = () => {
  const [data, setData] = useState({
    Open: []
  })

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "http://api.marketstack.com/v1/eod?access_key=b608ad8d8dd43d4f4f352cb5e3d5d84a&symbols=AAPL",
      );
      console.log(result.data.data)

      setData({ Open: result.data.data });
    };
    fetchData();
  }, []);

  return (
    <>
    {/* <ul>
      {data.Open.map((item, index) =>
        <li key={index}>{JSON.stringify(item)}</li>
      )};
    </ul> */}
    <List>
      {data.Open.map(data => (
        <Card key={data._id} item={data}/>  
      ))}
    </List>
    </>
  );
  
}

export default App;
