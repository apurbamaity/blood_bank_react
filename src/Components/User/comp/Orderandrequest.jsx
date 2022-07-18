import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Requestblood from './Requestblood.jsx'
import axios from "axios";
import '../User.css'
import { isloggedin, getuserrole, setloggedinuser, getloggedinuserdata } from '../../Methods/trytoregister.jsx'
import Userdata from '../../Userdata.jsx'





const Singleorder = (props) => {
  if (props.d.status == "approved") {
    return (
      <>
        <div class="single_request row p-0">
          <div class="col-xl-3 col-12 blood_group_image_out1 p-small">
            <div class="order">
              {props.d.useremail}
            </div>
          </div>
          <div class="col-xl-2 col-12 blood_group_image_out1 p-small">
            <div class="order">
              {props.d.useraddress}
            </div>
          </div>
          <div class="col-xl-1 col-12 blood_group_image_out1 p-large">
            <div class="order">
              {props.d.price}
            </div>
          </div>
          <div class="col-xl-1 col-12 blood_group_image_out1 p-large">
            <div class="order">
              {props.d.amount}L
            </div>
          </div>

          <div class="col-xl-1 col-12 blood_group_image_out1 p-large text-left">
            <div class="order">
              {props.d.type}
            </div>
          </div>

          <div class="col-xl-2 col-12 blood_group_image_out1 p-large text-left">
            <div class="order">
              {props.d.orderdate}
            </div>
          </div>

          <div class="col-xl-2 col-12 blood_group_image_out1 p-large py-2">
            <div class="approved">


              <div class="d-flex flex-row bd-highlight p-small">
                <div class="px-2">approved</div>
                <i class="fa-solid fa-circle-check fa-2x"></i>
              </div>
            </div>
          </div>


        </div>
      </>
    )

  } else {
    return (
      <>

      </>
    )
  }
}
const Singlerequest = (props) => {
  if (props.d.status == "requested") {
    return (
      <>
        <div class="single_request row p-0">
          <div class="col-xl-3 col-12 blood_group_image_out1 p-small">
            <div class="order">
              {props.d.useremail}
            </div>
          </div>
          <div class="col-xl-2 col-12 blood_group_image_out1 p-small">
            <div class="order">
              {props.d.useraddress}
            </div>
          </div>
          <div class="col-xl-1 col-12 blood_group_image_out1 p-large">
            <div class="order">
              {props.d.price}
            </div>
          </div>
          <div class="col-xl-1 col-12 blood_group_image_out1 p-large">
            <div class="order">
              {props.d.amount}L
            </div>
          </div>

          <div class="col-xl-1 col-12 blood_group_image_out1 p-large text-left">
            <div class="order">
              {props.d.type}
            </div>
          </div>
          <div class="col-xl-2 col-12 blood_group_image_out1 p-large text-left">
            <div class="order">
              {props.d.orderdate}
            </div>
          </div>

          <div class="col-xl-2 col-12 blood_group_image_out1 p-large py-2">
            <div class="order1">


              <div class="d-flex flex-row bd-highlight p-small">
                <div class="px-2">requested </div>
                <div class=""><i class="fa-solid fa-truck-arrow-right"></i></div>
              </div>
            </div>
          </div>
        </div>
      </>
    )

  } else {
    return (
      <>

      </>
    )
  }
}
const Allblood = () => {

  const [reqandorder, setReqandorder] = useState([]);

  useEffect(() => {


    const url = process.env.REACT_APP_SERVER_URL
    let emailId = getloggedinuserdata().username
    axios.get(url + "/user/blood/request/all", { params: { email: emailId } })
      .then((response) => {
        setReqandorder(response.data)
        console.log(response.data)
      }, (error) => { })



  }, []);



  return (
    <>
      <>
        <div className="">
          <div className="">

            <Userdata />


            <div class="available_blood h2 p-3 my-3 mx-5">
              Your All Request
            </div>


            <div className="row px-5">
              <div class="row h4 p-0 table_heading">
                <div class="col-xl-3 col-12 blood_group_image_out1 p-large ">
                  <div class="order">
                    EMAIL ID
                  </div>
                </div>
                <div class="col-xl-2 col-12 blood_group_image_out1 p-small">
                  <div class="order">
                    ADDRESS, PIN
                  </div>
                </div>
                <div class="col-xl-1 col-12 blood_group_image_out1 p-large">
                  <div class="order">
                    PRICE
                  </div>
                </div>
                <div class="col-xl-1 col-12 blood_group_image_out1 p-large">
                  <div class="order">
                    QUANT.
                  </div>
                </div>
                <div class="col-xl-1 col-12 blood_group_image_out1 p-large">
                  <div class="order">
                    GROUP
                  </div>
                </div>
                <div class="col-xl-2 col-12 blood_group_image_out1 p-large">
                  <div class="order">
                    DATE
                  </div>
                </div>
                <div class="col-xl-1 col-12 blood_group_image_out1h2">
                  <div class="order">

                  </div>
                </div>
              </div>


              {reqandorder.map((d) => (
                <Singlerequest d={d} />
              ))}
            </div>


            <div class="available_blood h2 p-3 my-3 mx-5">
              All Your Previous Orders
            </div>



            <div className="row px-5">
              <div class="row h4 p-0 table_heading">
                <div class="col-xl-3 col-12 blood_group_image_out1 p-large ">
                  <div class="order">
                    EMAIL ID
                  </div>
                </div>
                <div class="col-xl-2 col-12 blood_group_image_out1 p-small">
                  <div class="order">
                    ADDRESS, PIN
                  </div>
                </div>
                <div class="col-xl-1 col-12 blood_group_image_out1 p-large">
                  <div class="order">
                    PRICE
                  </div>
                </div>
                <div class="col-xl-1 col-12 blood_group_image_out1 p-large">
                  <div class="order">
                    QUANT.
                  </div>
                </div>
                <div class="col-xl-1 col-12 blood_group_image_out1 p-large">
                  <div class="order">
                    GROUP
                  </div>
                </div>
                <div class="col-xl-2 col-12 blood_group_image_out1 p-large">
                  <div class="order">
                    DATE
                  </div>
                </div>
                <div class="col-xl-1 col-12 blood_group_image_out1h2">
                  <div class="order">

                  </div>
                </div>
              </div>


              {reqandorder.map((d) => (
                <Singleorder d={d} />
              ))}
            </div>








          </div>
        </div>



      </>
    </>
  )
}

export default Allblood