import {useState, useEffect} from "react";
import useHoroscop from "../hooks/useHoroscop";

const Weather = () => {

    const [searchWeather, setSearchWeather] = useState("")

    
    
   
   
    //const {data, error, isPending} = useHoroscop(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=8e352e5fc385213cf324146681cff4bb`)
    
    const submit = (e) =>{
        e.preventDefault();
        
        const queryParams = new URLSearchParams(searchWeather);
        const query = queryParams.get("q");

        console.log(searchWeather)
        
    
    }


    return ( 
        <div>
          <form onSubmit={submit}>
             <input onChange={(e) => setSearchWeather(e.target.value)} type="text" />
              <button>Search</button>
          </form>
            

        </div>
     );
}
 
export default Weather;