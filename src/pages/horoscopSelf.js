import { useParams } from "react-router-dom";
import { useState } from "react";
import useHoroscop from "../hooks/useHoroscop";


const HoroscopSelf = () => {

    const {id} = useParams();

    const {data, error, isPending} = useHoroscop(`http://sandipbgt.com/theastrologer/api/horoscope/${id}/today/`);


    console.log(data)


    return ( 
        <div>

            <h1>{id}</h1>
            {error && <p>{error}</p>}
            {isPending && <p>Loading...</p>}

            {data && <p>{data.horoscope}</p>}

        </div>
     );
}
 
export default HoroscopSelf;