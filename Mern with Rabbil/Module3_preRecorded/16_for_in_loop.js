//when we use for in loop?
//we create an object then continue within loop

var billGates = {
    shirt:true,shirtColor:"offWhite", smile:true,
    sweater:true, sweaterColor:"gray", glass:true
}

for(let props in billGates)   //props means property.
{
    // console.log(props)
    // console.log(billGates[props])
    console.log(props+"="+billGates[props])
}