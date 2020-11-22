function GraphPartial(item){
    var arr = []
    for (var i = 0; i<5 ; i++){
        arr.push({ y: item.open, label: item.date});
    }
    return arr;
}

export default GraphPartial;