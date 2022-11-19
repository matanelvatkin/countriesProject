import { useContext, useState } from "react";
import { popUpContext } from "../App";
import CountryCard from "../CountryCard/CountryCard";

function CountryList(props){
    return (
        <div className="countryListStyle">
            {props.data.map((v,i)=>{
                return <CountryCard key={i} data = {v}/> 
            })}
        </div>
    )
}
export default CountryList