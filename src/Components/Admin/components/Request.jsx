import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Allorders from "../components/Allorders.jsx"
import '../Admin.css'
import Formheading from './Formheading.jsx'
import Userdata from '../../Userdata.jsx'


const Singlerequest = (props) => {





  const approvethisorder = (requestid) => {
    const url = process.env.REACT_APP_SERVER_URL
    //let x = JSON. stringify(requestid)
    console.log("approvethisorder/" + requestid)

    axios.get(url + "/admin/blood/request/approve/" + requestid)
      .then((response) => {
        window.location.reload()
      }, (error) => { })
  }


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
              <div class="hello">711313</div>
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
              {props.d.orderdate.substring(0,10)}
            </div>
          </div>

          <div class="col-xl-2 col-12 blood_group_image_out1 p-large py-2">
            <div class="order1">


              <div class="d-flex flex-row bd-highlight make_it_pointer" onClick={() => approvethisorder(props.d.id)}>
                <div class="px-2"><input type="submit" value="approve" /> </div>
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

  const [request, setRequest] = useState([]);

  useEffect(() => {
    const url = process.env.REACT_APP_SERVER_URL
    axios.get(url + "/admin/blood/request/all")
      .then((response) => {
        setRequest(response.data)
        console.log(response.data)
      }, (error) => { })
  }, []);




  return (
    <>
      <div className="">
        <div className="">
          <Userdata />
          <div class="available_blood h2 p-3 my-3 mx-5">
            All the request
          </div>
          <div className="row px-5">


            {/* HEADING for a row */}
            <Formheading />


            {request.map((d) => (
              <Singlerequest d={d} />
            ))}
          </div>
        </div>
      </div>

      {/* DISPLAY ALL APPROVED ORDERS */}
      <Allorders request={request} />



    </>
  )
}

export default Allblood