import React from "react";
// import Graph from "../Graph"

function Card({item}) {
    return (
        <div className="container">
            <div className="card">
                <div className="card-header"><h2>Equity: {item.symbol} Company: {item.name} Exchange: {item.stock_exchange.acronym}</h2></div>
                <div className="card-body">
                    <h3>{item.date}</h3>
                    <p>Open: {item.open}</p>
                    <p>Closed: {item.close}</p>
                    <p>Current High: {item.high}</p>
                    <p>Current Low: {item.low}</p>

                    {/* <Graph
                    /> */}
                </div>
            </div>
        </div>
    );
}

export default Card;