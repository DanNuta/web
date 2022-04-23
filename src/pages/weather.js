import {useState, useEffect} from "react";
import useHoroscop from "../hooks/useHoroscop";

const Weather = () => {

    const [searchWeather, setSearchWeather] = useState("")

    const {data, error, isPending} = useHoroscop(`https://api.openweathermap.org/data/2.5/weather?q=${searchWeather}&appid=8e352e5fc385213cf324146681cff4bb`)

   

    return ( 
        <div>
           <input onChange={(e) => setSearchWeather(e.target.value)} type="search" name="" id="" />
        </div>
     );
}
 
export default Weather;