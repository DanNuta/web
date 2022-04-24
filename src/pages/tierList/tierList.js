import "./tierList.scss";

const TierList = () => {

    const tips = ["Nu il stiu", "Mai bine nu", "Cancer", "Naspa", "Meh", "ok", "Foarte buni", "Preferati"];

    return ( 
        <div>
            {tips.reverse().map((element, i) =>(
                <div className="tier_list" key={i}>
                    <div className="category_tier_list">
                    <p >{element}</p>
                    </div>
                </div>
            ))}
        </div>
     );
}
 
export default TierList;