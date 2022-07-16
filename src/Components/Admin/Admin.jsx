import React,{useState,useEffect} from "react";
import { useHistory } from "react-router-dom";
import './Admin.css';
import Allblood from './components/Allblood.jsx'
import Request from './components/Request.jsx'
import Allorders from './components/Allorders.jsx'



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
                <Request />
            </>
        )
    }else if(props.which === "Allorders"){
        return(
            <>
                <Allorders />
            </>
        )
    }
}
const Admin = (props) =>{
    return(
        <>
            <div className="Admin">
                <div className="">
                    <div className="admin_head_allbload">
                        <Returnthis which={props.which} />
                    </div>
                </div>
            </div>    
        </>        
    )
}

export default Admin