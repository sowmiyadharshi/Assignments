function launchBrowser(browsername){
    if(browsername==="chrome"){
        console.log(browsername +" " + "opened successfully");   
     }

    else if(browsername==="edge")
    {
       console.log(browsername + "opened successfully");  
      }  
    else if(browsername==="firefox")
    {
         console.log(browsername + "opened successfully"); 
         }
         else{
            console.log("unable to open the browser")
         }

        
        }

        launchBrowser("chrome")
         launchBrowser("edge")
          launchBrowser("firefox")
           launchBrowser("")

