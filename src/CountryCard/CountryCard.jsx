import { useContext } from "react"
import { popUpContext } from "../App"


function CountryCard(props){
    const contextValue = useContext(popUpContext)
    return (

        <div onClick={()=>{
            contextValue.data = props.data
            contextValue.OnClickedOnCountry()
            }}>
            <div className="cardStyle" >
                <div>
                    <img className="imgOfCard" src={props.data.flags.svg} alt=""/>
                </div>
                <div className = "cardDetile">
                    <span style={{fontWeight:"bold"}}>
                        {props.data.name.common}
                    </span>
                    -
                    <span>
                        {props.data.capital}<br/>
                    </span>
                    <span style={{fontWeight:"lighter"}}>
                        {props.data.continents}
                    </span>               
                </div>
            </div>
        </div>
    )
}

export default CountryCard