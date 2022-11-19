import { useContext } from "react";
import { popUpContext } from "../App";
import CountryList from "../CountryList/CountryList"

function Main(props){
    
    return <div>
            <CountryList data={props.data} setNumCountres={props.setNumCountres}/>;
        </div>
}

export default Main;