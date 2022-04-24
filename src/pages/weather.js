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
    }
    
    

    return ( 
        <div>
          <form onSubmit={submit}>
             <input onChange={(e) => setSearchWeather(e.target.value)} type="text" />
              <button>Search</button>
          </form>

          {isPending && <p>Loading...</p>}

          {data && <div>
                   <h2>{data.name}</h2>
                   
              
                   </div>}



    
        </div>
     );
}
 
export default Weather;