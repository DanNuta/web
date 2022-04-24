import {useState, useEffect} from "react";
import useHoroscop from "../hooks/useHoroscop";
import {Link} from "react-router-dom";

import "./home_location.scss";

const HomeLocation  = () => {

    const [latitide, setLatitude] = useState("");
    const [longitudine, setLongitudine] = useState("");
    const [pending, setIsPending] = useState(false);
    const [eroare, setError] = useState(null);
    const [url, setUrl] = useState("");
    const [info, setData] = useState("")

    const {data, error, isPending} = useHoroscop(url)


    useEffect(() =>{

        const geo = async () => {
            try{
                setIsPending(true)
                 navigator.geolocation.getCurrentPosition(position => {
                     setLatitude(position.coords.latitude)
                     setLongitudine(position.coords.longitude)
                     setIsPending(false)
                     setUrl(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=8e352e5fc385213cf324146681cff4bb`)
                })
            }catch(e){
                setError(e.message);
                setIsPending(false)
            }
        }
        geo()
    }, [])




    useEffect(() =>{

        const wather = async () =>{
    
            try{
                setIsPending(true)
                if(url){
                    const rez = await fetch(url)
                    const element = await rez.json();
                    setData(element)
                    setIsPending(false)
                }
    
            }catch(e){
                setError(e.message);
                setIsPending(false)
    
            }
        }
        wather()
    }, [url])







console.log(data)
    return ( 
        <div>
            {pending && <p>Loading...</p>}
            {eroare && <p>{error}</p>}

            {info && <Link to="/weather"><div className="geo_location">
                   <h2>{info.name}</h2>
                   <h3>{info.weather[0].main}</h3>
                   <p>{info.weather[0].description}</p>
                   {info.weather[0].icon === "01d" && <img src="https://img.icons8.com/office/16/000000/summer.png"/>}
                   {info.weather[0].icon === "02d" && <img src="https://img.icons8.com/office/16/000000/partly-cloudy-day--v1.png"/>}
                   {info.weather[0].icon === "03d" && <img src="https://img.icons8.com/office/16/000000/clouds.png"/>}
                   {info.weather[0].icon === "10d" && <img src="https://img.icons8.com/office/16/000000/rain.png"/>}
                   {info.weather[0].icon === "04d" && <img src="https://img.icons8.com/clouds/100/000000/clouds.png"/>}
                   </div></Link>}

        </div>
     );
}
 
export default HomeLocation;