import Search from "./Search/Search"

function Header(props){
    return <div style={{display:"flex",
    flexDirection:"row",
    marginLeft:"20%"}}>
        <h1>
            countries({props.length})
        </h1>
        <span style={{marginLeft:"30%",marginTop:"3%"}}>
            <Search onInputF={props.onInputF}/>   
        </span>
    </div>
}

export default Header