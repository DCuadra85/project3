import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios"

const gitHubURL = "http://api.marketstack.com/v1/eod?access_key=b608ad8d8dd43d4f4f352cb5e3d5d84a&symbols=AAPL";

function App() {

  const [userData, setUserData] = useState({});

  useEffect(() => {
    getStocksWithAxios();
  }, []);

  const getStocksWithAxios = async () => {
    const response = await axios.get(gitHubURL);
    setUserData(response.data);
    console.log(response.data)
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Test</h2>
      </header>
      <div className="user-container">
        <h5 className="info-item">{userData.symbol}</h5>
      </div>
    </div>
  );
}

export default App;
