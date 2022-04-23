import useHoroscop from "../hooks/useHoroscop";
import {Link} from "react-router-dom";

const Horoscop = () => {

    const {data, error, isPending} = useHoroscop("http://sandipbgt.com/theastrologer/api/sunsigns/");

    console.log("data",data)

    return ( 
        <div>
            {isPending && <p>Loading...</p>}
            {error && <p>{error}</p>}

            <nav>
                <ul>
                    {data && data.map(item => (
                        <li key={item}><Link to={`/horoscop/${item}`}>{item}</Link></li>
                    ))}
                </ul>
            </nav>
        </div>
     );
}
 
export default Horoscop;