import React, { useState, useEffect } from 'react';
import axios from "axios"
import Card from "../Components/Card";
import List from "../Components/List";

const Home = () => {
  const [data, setData] = useState({
    Open: []
  })

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "http://api.marketstack.com/v1/tickers?access_key=b228c703a0f40145978c32c631031281&limit=2",
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

export default Home;