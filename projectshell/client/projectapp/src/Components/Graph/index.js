import React, { useState, useEffect } from "react";
import CanvasJSreact from "./canvasjs.react";

import axios from "axios"
import GraphPartial from "../GraphPartial"
var CanvasJS = CanvasJSreact.CanvasJS;
var CanvasJSChart = CanvasJSreact.CanvasJSChart;
//https://canvasjs.com/react-charts/multiseries-chart/
// we would want to map data
function Graph() {
    const [data, setData] = useState({
        Open: []
      })

      useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            "http://api.marketstack.com/v1/eod?access_key=b608ad8d8dd43d4f4f352cb5e3d5d84a&symbols=AAPL&limit=5",
          );
          console.log(result.data.data)
    
          setData({ Open: result.data.data });
        };
        fetchData();
      }, []);
    const options ={
        animationEnabled: true,
        title: {
            text: "Comparison by Company"
        },
        axisY: {
            title: "Moneys"
        },
        // this part needs to be mapped out for each company then each data value
        data : [
        <GraphPartial key={data._id} item={data}/>  
        ]
        }
        return (
          <>
        <CanvasJSChart options = {options} />
        </>
        );
    }

    export default Graph;