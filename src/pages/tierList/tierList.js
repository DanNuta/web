import {useState} from "react";
import "./tierList.scss";
import webStorege from "../../firebase/config";
import webFirestore from "../../firebase/config";

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


    console.log(webFirestore)

   async function storegeFile(){
         try{
            const thumbnailPath = `thumbnails/${thumbnail.name}`;
             webStorege.ref(thumbnailPath).put(thumbnail);
         }catch(e){
             console.log("Eroare",e.message)
             setError(e.message)
         }

    }


    const submit = (e) =>{
        e.preventDefault();

        storegeFile()

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


          <form onSubmit={submit} className="form">
              <input onChange={fileSelect} type="file" />
              <button>Add</button>
          </form>

          {error && <p>{error}</p>}
        </div>
     );
}
 
export default TierList;