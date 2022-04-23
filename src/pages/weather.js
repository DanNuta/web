import {useState, useEffect} from "react";
import useHoroscop from "../hooks/useHoroscop";
import { useSearchParams } from "react-router-dom";

const Weather = () => {

    const [searchWeather, setSearchWeather] = useState("");

    const [url, setUrl] = useState("");


    useEffect(() =>{        

    }, [])
   
    
    
    
    
    //https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=8e352e5fc385213cf324146681cff4bb
    
    
    
    const submit = (e) =>{
        e.preventDefault();
        
        setUrl(`https://api.openweathermap.org/data/2.5/weather?q=${searchWeather}&appid=8e352e5fc385213cf324146681cff4bb`)
    }
    
    console.log(data)

    return ( 
        <div>
          <form onSubmit={submit}>
             <input onChange={(e) => setSearchWeather(e.target.value)} type="text" />
              <button>Search</button>
          </form>


          {data && <p>{data}</p>}
          {error && <p>{error}</p>}
            

        </div>
     );
}
 
export default Weather;