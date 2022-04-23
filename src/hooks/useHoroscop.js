import {useState, useEffect} from "react";


const useHoroscop = url => {

    const [data, setData] = useState("")
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false)



    useEffect(() =>{

        async function horoscop(){
            try{
                setIsPending(true)
                const rez = await fetch(url);
                const element = await rez.json();
                setData(element);

                setIsPending(false)

            }catch(e){
                setError(e.message)
                setIsPending(false)
            }
        }

        horoscop()
    }, [])

    return {data, error, isPending};
}
 
export default useHoroscop;