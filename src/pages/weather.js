import {useState, useEffect} from "react";
import useHoroscop from "../hooks/useHoroscop";
import { useSearchParams } from "react-router-dom";

const Weather = () => {

    const [searchWeather, setSearchWeather] = useState("");

    const [url, setUrl] = useState("");

    const [data, setData] = useState("");
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false)




    useEffect(() =>{

        const wather = async () =>{
    
            try{
                setIsPending(true)
                const rez = await fetch(url)
                const element = await rez.json();
                setData(element)
                setIsPending(false)
    
            }catch(e){
                setError(e.message);
                setIsPending(false)
    
            }
        }
        wather()
    }, [url])
    
    console.log("data",data)
    
    
    
    const submit = (e) =>{
        e.preventDefault();
        
        
        setUrl(`https://api.openweathermap.org/data/2.5/weather?q=${searchWeather}&appid=8e352e5fc385213cf324146681cff4bb`)
    
        setSearchWeather("")
    }
    
    

    return ( 
        <div>
          <form onSubmit={submit}>
             <input onChange={(e) => setSearchWeather(e.target.value)} type="text" value={searchWeather} placeholder="ex: Budapesta" />
              <button>Search</button>
          </form>

          {isPending && <p>Loading...</p>}

          {data && <div>
                   <h2>{data.name}</h2>
                   <h3>{data.weather[0].main}</h3>
                   <p>{data.weather[0].description}</p>
                   {data.weather[0].icon === "01d" && <img src="https://img.icons8.com/office/16/000000/summer.png"/>}
                   {data.weather[0].icon === "02d" && <img src="https://img.icons8.com/office/16/000000/partly-cloudy-day--v1.png"/>}
                   {data.weather[0].icon === "03d" && <img src="https://img.icons8.com/office/16/000000/clouds.png"/>}
                   {data.weather[0].icon === "10d" && <img src="https://img.icons8.com/office/16/000000/rain.png"/>}
                   {data.weather[0].icon === "04d" && <img src="https://img.icons8.com/clouds/100/000000/clouds.png"/>}




              
                   </div>}




    
        </div>
     );
}
 
export default Weather;