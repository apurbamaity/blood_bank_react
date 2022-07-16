import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import '../assets/Home.css';
import Sidebar from '../Sidebar/Sidebar.jsx'
import './Login.css';
import axios from 'axios';
import {isloggedin,getuserrole,setloggedinuser,getloggedinuserdata} from '../Methods/trytoregister.jsx'

const Login = () => {

  const [formdata, setFormdata] = useState({ email: "", password: "" })

  const update = (event) => {
    let val = event.target.value
    let name = event.target.name
    setFormdata((prev) => {
      if (name === "email") {
        return { email: val, password: prev.password }
      } else {
        return { email: prev.email, password: val }
      }
    })
    console.log(formdata)
  }

  const trytologin = () => {
    let user ={
      "username":formdata.email,
      "password":formdata.password,
    }
    axios.post(process.env.REACT_APP_SERVER_URL + "/user/login", user)
      .then((response) => {
        console.log(response.data) 
        if(response.data!=null){
          setloggedinuser(response.data)
          history.push({
            pathname: '/',
          });
        }
      }, (error) => { })
  }


  const history = useHistory();

  const gotoregister = () => {
    history.push({
      pathname: '/register',
    });
  }
  const gotohome = () => {
    history.push({
      pathname: '/',
    });
  }
  return (
    <>
      <div>
        <div class="container-fluid">
          <div class="row login_page_outside">
            {/*<div className="col-xl-1 col-lg-2 col-md-3 col-sm-0 left_block">
                            <Sidebar/>
    </div>*/}
            <div class="col-xl-12 col-lg-10 px-lg-5 px-0 col-sm-12 main_login_window py-5">
              <div class="login_inside p-5">
                {/*<div class="welcome_back h3 text-center">
                                    welcome back <br/><br/> <i class="fa-solid fa-face-smile-beam fa-2x"></i>
    </div>*/}
                <div class="login_to_your_acc h1 text-center p-lg-3 p-2">
                  Login
                </div>



                <div class="p-large mt-3">
                  {/*Enter Email Adress*/}
                  <div class="px-3 py-2 mt-3 input">
                    <div class="row">
                      <div class="col-lg-2 col-2">
                        <i class="fa-solid fa-envelope-circle-check fa-2x"></i>
                      </div>
                      <div class="col-lg-10 col-10">
                        <input onChange={update} class="w-100 p-3" name="email" type="email" placeholder="enter your email address" />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="p-large mt-3">
                  {/*Enter password*/}
                  <div class="px-3 py-2 mt-3 input">
                    <div class="row">
                      <div class="col-lg-2 col-2">
                        <i class="fa-solid fa-lock fa-2x"></i>
                      </div>
                      <div class="col-lg-10 col-10">
                        <input onChange={update} class="w-100 p-3" name="password" type="password" placeholder="enter your password" />
                      </div>
                    </div>

                  </div>
                </div>

                {/*<div class="p-large mt-3 forgot_password make_it_pointer px-3">
                                    Forgot password<i class="fa-regular fa-circle-question px-2"></i>
</div>*/}

                <div class="h2 text-center mt-3 make_it_pointer login_button p-3" onClick={trytologin}>
                  LOG IN <i class="fa-solid fa-fingerprint"></i>
                </div>
                <div class="p-small register_here make_it_pointer text-center" onClick={gotoregister}>
                  don't have an account register
                </div>

                <div class="h6 text-black text-center make_it_pointer" onClick={gotohome}>
                  <i class="fa-solid fa-house-chimney"></i> return to home
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </>


  )
}

export default Login;