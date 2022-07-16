import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import '../assets/Home.css';
import Sidebar from '../Sidebar/Sidebar.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';
import axios from 'axios';

const Register = () => {
  const history = useHistory();

  const trytoregister = () => {
    if (formdata.password != formdata.conpass) {
      console.log("passwoed not match")
      toast.error("🚫 password not match", {
        position: "top-right", autoClose: 2000,
      })
    }

    let user ={
      "username":formdata.email,
      "password":formdata.password,
      "address":formdata.address,
    }
    axios.post(process.env.REACT_APP_SERVER_URL + "/user/register", user)
      .then((response) => {
        console.log(response.data)
        if(response.data==200){
          history.push({
            pathname: '/login',
          });
        }
      }, (error) => { })


  }

  const gotohome = () => {
    history.push({
      pathname: '/',
    });
  }

  const gotologin = () => {
    history.push({
      pathname: '/login',
    });
  }


  const [formdata, setFormdata] = useState({ email: "", password: "", conpass: "", address: "" })
  const update = (event) => {
    let val = event.target.value
    let name = event.target.name
    setFormdata((prev) => {
      if (name === "email") {
        return { email: val, password: prev.password, conpass: prev.conpass, address: prev.address }
      } else if (name === "password") {
        return { email: prev.email, password: val, conpass: prev.conpass, address: prev.address }
      } else if (name === "conpass") {
        return { email: prev.email, password: prev.password, conpass: val, address: prev.address }
      } else {
        return { email: prev.email, password: prev.password, conpass: prev.conpass, address: val }
      }
    })
    //console.log(formdata)
  }
  


  return (
    <>
      <ToastContainer />
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
                <div class="login_to_your_acc h1 text-center">
                  Register Here
                </div>



                <div class="p-large">
                  {/*Enter Email Adress*/}
                  <div class="px-3  mt-3 input">
                    <div class="row">
                      <div class="col-lg-2 col-2">
                        <i class="fa-solid fa-at fa-2x"></i>
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

                <div class="p-large mt-3">
                  {/*Enter password*/}
                  <div class="px-3 py-2 mt-3 input">
                    <div class="row">
                      <div class="col-lg-2 col-2">
                        <i class="fa-solid fa-lock-open fa-2x"></i>
                      </div>
                      <div class="col-lg-10 col-10">
                        <input onChange={update} class="w-100 p-3" name="conpass" type="password" placeholder="confirm your password" />
                      </div>
                    </div>

                  </div>
                </div>

                <div class="p-large mt-3">
                  {/*Enter password*/}
                  <div class="px-3 py-2 mt-3 input">
                    <div class="row">
                      <div class="col-lg-2 col-2">
                        <i class="fa-solid fa-address-book fa-2x"></i>
                      </div>
                      <div class="col-lg-10 col-10">
                        <input onChange={update} class="w-100 p-3" name="address" type="text" placeholder="enter your address, Pin.no" />
                      </div>
                    </div>
                  </div>
                </div>

                {/*<div class="p-large mt-3 forgot_password make_it_pointer px-3">
                                    Forgot password<i class="fa-regular fa-circle-question px-2"></i>
</div>*/}

                <div class="h2 text-center mt-3 make_it_pointer login_button p-3" onClick={trytoregister}>
                  REGISTER <i class="fa-solid fa-fingerprint"></i>
                </div>


                <div class="p-small register_here make_it_pointer text-center" onClick={gotologin}>
                  already have an account login here
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

export default Register;