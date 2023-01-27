import React from "react";
// import "../awards/Awards.css";

const Icon = (props) =>{
    return(
        <>
        <img src={props.iconUrl} alt="Icon" id={props.id} className="img-fluid mx-1 my-2" />
        </>
    )
}

export default Icon;