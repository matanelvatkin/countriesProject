import Layut from "./Layut/Layut";
import './App.css';
import { createContext, useState } from "react";
export const popUpContext =createContext();

function App() {
  const [popUpValue,setPopUpValue]= useState(null)

  const getLanguages =()=>{
    let returnArr = [];
    for(let i in popUpValue.languages){
      returnArr.push(popUpValue.languages[i])
    }
    return returnArr
  }

  return (
    <popUpContext.Provider value={{data:null,
    OnClickedOnCountry:function(){
      setPopUpValue(this.data)
    }}}>
      {popUpValue?<div className="popUp" onClick={()=>setPopUpValue(null)}>
        <div className="popUpDetile">
          <img  className="imgOfPopUp" src = {popUpValue.flags.png}/>
          <div>
              <span style={{fontWeight:"bold"}}>Population</span><br/>
              <span>{popUpValue.population}</span><br/>
              <span style={{fontWeight:"bold"}}>Languages</span><br/>
              {getLanguages().map(v=>(<p>{v}</p>))}

          </div>
        </div>
      </div>:null}
      <Layut/>
    </popUpContext.Provider>
  );
}

export default App;
