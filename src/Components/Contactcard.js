import React from "react";
import avt from "./images/avt.jpg";
const Contactcard=(props)=>{
    const {name,email}=props.contact;
    return(

   <div className="item">
    <img className="ui avatar image" src={avt} alt="user" />
        <div className="content">
            
            <div className="header">{name}</div>
            <div >{email}</div>
        </div>
        <i className="trash alternate outline icon" style={{color:"red",marginTop:"12px",display:"flex"}}></i>
     </div>
    );
}
export default Contactcard;