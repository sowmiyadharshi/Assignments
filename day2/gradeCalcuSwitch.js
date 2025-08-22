function gradeCal(studentScore){

      switch(true){
        case(studentScore>=90):
        console.log("Grade A")
        break;
    
        case(studentScore >= 80 && studentScore <= 89):
    console.log("Grade B")
break;
    

    case(studentScore >=50 && studentScore <=79):
    console.log("Grade C")
    break;

    default:
        console.log("Fail")

}}

gradeCal(75)
gradeCal(25)
gradeCal(95)
gradeCal(80)
gradeCal()