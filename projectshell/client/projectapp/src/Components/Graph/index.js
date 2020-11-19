import React from "react";
import CanvasJSreact from "./canvasjs.react.js";
var CanvasJS = CanvasJSreact.CanvasJS;
var CanvasJSChart = CanvasJSreact.CanvasJSChart;
//https://canvasjs.com/react-charts/multiseries-chart/
// we would want to map data
function Graph(props) {
    const options ={
        animationEnabled: true,
        title: {
            text: "Comparison by Company"
        },
        axisY: {
            title: "Moneys"
        },
        data :[{
            type: "spline",
            name: props.name,
            showInLegend: true,
            dataPoints: [
                { y: "value", label: "date"}
            ]
        }]
    }
}