import React,{useState} from "react";





export default function Rates() {
   
    const [eur,setEur] = useState();
 
  
    const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch('https://api.fastforex.io/fetch-all?from=EUR&api_key=', options)
.then(response => {console.log(response.results)
})
.catch(err => console.error(err));


    return (
            <>
            <div><output></output></div>
            </>
    )
   
}