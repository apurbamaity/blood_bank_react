import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {isloggedin,getuserrole,setloggedinuser,getloggedinuserdata} from './Methods/trytoregister.jsx'
import './assets/Userdata.css'




const Userdata = (props) => {
  return (
    <>
      <div class="logged_in_data_out mt-3">
        <div class="logged_in_data p-small px-5">
          you are logged in as <span class="red_and_bold px-2">{getloggedinuserdata().roles}</span> with email.id 
          <span class="red_and_bold px-2">{getloggedinuserdata().username}</span>..
        </div>
      </div>
    </>
  )
}

export default Userdata