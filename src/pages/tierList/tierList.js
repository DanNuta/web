import {useState} from "react";
import "./tierList.scss";

const TierList = () => {

    const tips = ["Nu il stiu", "Mai bine nu", "Cancer", "Naspa", "Meh", "ok", "Foarte buni", "Preferati"];

    const [error, setError] = useState(null);
    const [thumbnail, setThumbnail] = useState();

    function fileSelect(e){
        let file = e.target.files[0];

        if(!file){
            setError("Trebuie sa alegi o poza");
            return
        }

        if(!file.type.includes("image")){
            setError("Acest fisier trebuie sa fie o poza");
            return
        }

        if(file.size > 100000){
            setError("Dimensiunea este prea mare")
            return
        }


        setThumbnail(file)
        setError(null)

        

        console.log(file)

    }
    return ( 
        <div>
            {tips.reverse().map((element, i) =>(
                <div className="tier_list" key={i}>
                    <div className="category_tier_list">
                    <p >{element}</p>
                    </div>
                </div>
            ))}


          <form className="form">
              <input onChange={fileSelect} type="file" />
          </form>

          {error && <p>{error}</p>}
        </div>
     );
}
 
export default TierList;