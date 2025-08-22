const { generateKeyPairSync } = require("crypto")

var city
console.log("I live in karur")
console.log(typeof city)

let marks=85
console.log(marks + 10)
console.log(typeof marks)


let isWeekend=true
if(isWeekend){
    console.log("Relax")
}
else{
    console.log("work")
}
console.log(typeof isWeekend)



var futureGoal
console.log(typeof futureGoal)

function onlineOrder(product){
    let payment='gpay'
    const payment3='paytm'
    
    var payment2='phonepe'

    if (product)
    {
        console.log("payment done by" + payment )
console.log("payment done by"+ payment3)
    }
    else
    {
        console.log("payment done by" + payment2)
    }
    //console.log(payment)
    console.log(payment2)
}
//console.log(payment2)



onlineOrder(false)


//var-funcion scope ,Redeclaration and reassignment is allowed
//Let- block scope, only reassignment is allowed

 