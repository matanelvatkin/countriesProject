import {Data} from "../Data";
import Main from "../Main/Main";
import Header from "../Header/Header";
import { useContext, useState } from "react";
import { popUpContext } from "../App";

function Layut(){
    let data = Data.sort( compare ); 
    function compare( a, b ) {
    if ( a.name.common < b.name.common ){
        return -1;
    }
    if ( a.name.common > b.name.common ){
        return 1;
    }
    return 0;
    }
    
    const onInputSearchFunction = (e)=>{
        setFiltering(e.target.value.toLowerCase());
    }

    const [filtering, setFiltering] = useState("all");
    

    data =data.filter(v=>v.name.common.toLowerCase().startsWith(filtering)||filtering==="all")

    return  (<div className="layutStalyle">
            <div>
                <Header data={data} onInputF={onInputSearchFunction} length={data.length}/>
            </div>
            <div>
                <Main data={data} filter={filtering}/>
            </div>
        </div>)
   
}

export default Layut;