import React,{useState,useEffect} from "react";
import { useHistory } from "react-router-dom";
import './User.css';
import Allblood from './comp/Allbload.jsx'
import Orderandrequest from './comp/Orderandrequest.jsx'




const Returnthis=(props)=>{
    if(props.which === "Allblood"){
        return(
            <>
                <Allblood />
            </>
        )
    }else if(props.which === "Request"){
        return(
            <>
                <Orderandrequest />
            </>
        )
    }
}
const User = (props) =>{
    return(
        <>
            <div className="Admin">
                <div className="">
                    <div className="row">
                        <Returnthis which={props.which} />
                    </div>
                </div>
            </div>    
        </>        
    )
}

export default User