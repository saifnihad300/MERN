
// simple object
var billGates = {
    shirt:true,shirtColor:"offWhite", smile:true,
    sweater:true, sweaterColor:"gray", glass:true
}

console.log(billGates['shirtColor'])

//nested object
var billGatesPro = {
    shirt:{
        color:"offWhite",
        quality:'Good',
        price:"$200"
    },
    sweater:{
        color:"Gray",
        quality:'Good',
        price:"$100",
        warm:"best"
    },
    face:{
        smiling:"Yes",
        glass:"Yes",
        teeth:"White,Big"
    }
}
console.log(billGatesPro['sweater']['price'])
