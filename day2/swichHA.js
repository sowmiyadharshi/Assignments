
function runTests(testType){


    switch(testType){
        case "smoke":
        console.log("Smoke testing")  
        break; 
        
        case"Sanity":
        console.log("Sanity testing")
        break;

        case"Regression":
        console.log("Regression Testing")
        break;
        default:
            console.log("smoke testing")
    }

    
}
runTests("smoke")
runTests("Sanity")
runTests("Regression")
runTests()