import React,{useState,useEffect} from "react";
import { useHistory } from "react-router-dom";
import '../assets/Home.css';
import './Sidebar.css'
import {isloggedin,getuserrole,setloggedinuser,getloggedinuserdata,loggedout} from '../Methods/trytoregister'


const Returntheloginsidebar =(props)=>{
    const history = useHistory();

    const gotologin =()=>{
        history.push({
            pathname: '/login',
        });
    }
    const gotohome =()=>{
        history.push({
            pathname: '/',
        });
    }
    const gotorequest =()=>{
        history.push({
            pathname: '/orderandrequest',
        });
    }
    const loggeoutuser =()=>{
        loggedout()
        history.push({
            pathname: '/login',
        });
    }
    return(
        <>
            {/* -------------------Home and Donate Button In Sidebar-------------------------- */}
            <div className="selectors py-5 px-0">
                <div>

                    {/* -------------------Home Button In Sidebar-------------------------- */}
                    <div className="single_menu_icon make_it_pointer py-2 mt-3 px-1">
                        <div className="p-large" onClick={gotohome}>
                            <i class="fa fa-home fa-2x" aria-hidden="true"></i><br/> home
                        </div>
                    </div>{/* -------------------Home Button In Sidebar-------------------------- */}
            
                    {/* -------------------Donate Button In Sidebar-------------------------- */}
                    <div className="single_menu_icon make_it_pointer py-2 mt-3 px-1" onClick={gotorequest} >
                        <div className="p-small">
                            <i class="fa-solid fa-hand-holding-medical fa-2x "></i> <br/>  Orders
                        </div>
                    </div>

                    {/* -------------------Donate Button In Sidebar-------------------------- 
                    <div className="single_menu_icon make_it_pointer py-2 mt-3 text-center">
                        <div className="p-large">
                            <i class="fa-solid fa-cart-flatbed-suitcase fa-2x"></i> <br/>  Orders
                        </div>
                    </div>-------------------Donate Button In Sidebar-------------------------- */}

                </div>
            </div>{/* -------------------Home and Donate Button In Sidebar-------------------------- */}

            {/* -------------------Signin Button In Sidebar outside Home and Donate-------------------------- */}
            <div className="single_menu_icon to_bootom make_it_pointer py-2 mt-3 px-1">
                <div className="h6" onClick={loggeoutuser}>
                    {/*<i class="fa-solid fa-user fa-2x px-3"></i> <br/>  {props.useridorloginbutton}*/}
                    <i class="fa-solid fa-right-from-bracket fa-2x"></i> LogOut
                </div>
            </div>{/* -------------------Signin Button In Sidebar outside Home and Donate-------------------------- */}
        
        </>
    )
}
const Sidebar = ()=>{

    const [userid,setUserid] = useState("");
    useEffect(() => {
        
    },[]);
    

    let x = 1;
    if(x==1){
        return(
            <Returntheloginsidebar useridorloginbutton="login" />
        )
    }else{
        return(
            {/*<Returntheprofilesidebar userid="login" />*/}
            
        )

    }
}

export default Sidebar;