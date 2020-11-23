// function GraphPartial(item){
//     var arr = []
//     for (var i = 0; i<5 ; i++){
//         arr.push({ y: item.open, label: item.date});
//     }
//     return arr;
// }
import React from "react";

function GraphPartial(item){
    var arr = []
    for (var i = 0; i<5 ; i++){
        arr.push({ y: item.open, label: item.date});
    }
    return (
        { type: "spline", name : item.symbol, showInLegend : true, dataPoints: arr }
    );
}

export default GraphPartial;