import React from "react";
// import Graph from "../Graph"

function Card(props) {
    return (
        <div className="container">
            <div className="card">
                <div className="card-header">{props.symbol}</div>
                <div className="card-body">
                    <h2>Exchange: {props.exchange}</h2>
                    <p>Current High: {props.}</p>
                    {/* <Graph
                    /> */}
                </div>
            </div>
        </div>
    );
}