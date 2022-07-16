import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Sidebar from './Sidebar/Sidebar.jsx'
import Admin from './Admin/Admin.jsx'
import User from './User/User.jsx'
import { isloggedin, getuserrole,loggedout } from './Methods/trytoregister.jsx'


import './assets/Home.css'



const Sendhome = (props) => {
  let history = useHistory()


  try {
    if (getuserrole() === "USER") {
      return (
        <div class="col-xl-11 col-lg-8 right_block">
          <User which={props.which} />
        </div>
      )
    } else {
      return (
        <div class="col-xl-11 col-lg-8 right_block">
          <Admin which={props.which} />
        </div>
      )
    }
  } catch (err) {
    loggedout()
    window.location.reload()
    history.push({ 
      pathname : './login'
    })

  }
  
  // if user is not looged in send to login page..


}



const Home = (props) => {
  const history = useHistory()

  const checkloggedinandsendhome = () => {
    if (isloggedin() == null) {
      console.log("not loged in")
      history.push({
        pathname: '/login',
      });
    }

  }



  useEffect(() => {
    checkloggedinandsendhome()
  }, []);


  return (
    <>
      <ToastContainer />
      <div className="container-fluid">
        <div className="">
          <div className="row">

            <div className="col-xl-1 col-lg-2 col-md-2 left_block">
              <Sidebar />
            </div>

            <Sendhome which={props.which} />

          </div>
        </div>
      </div>
    </>
  )
}

export default Home