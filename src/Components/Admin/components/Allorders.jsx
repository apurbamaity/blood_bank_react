import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import '../Admin.css'
import Orderorrequest from './Orderorrequest.jsx'
import Formheading from './Formheading.jsx'




const Approveorordered = (props) => {
  if (props.status === "requested") {
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
        if (response.data != null)
          setRequest(response.data)
        console.log(response.data + "heree")

      }, (error) => { })
  }, []);

  const approvethisorder = (requestid) => {
    const url = process.env.REACT_APP_SERVER_URL
    //let x = JSON. stringify(requestid)
    console.log("approvethisorder/" + requestid)

    axios.get(url + "/approvethisorder/" + requestid)
      .then((response) => {
        //setRequest(response.data)
        console.log(response.data)
      }, (error) => { })
  }


  return (
    <>
      <div className="">
        <div className="">
          
          <div class="available_blood h2 p-3 my-3 mx-5">
            All the approved orders
          </div>
          <div className="row px-5">

            <Formheading />

            {request.map((d) => (
              <Orderorrequest single={d} status="1" />
            ))}


          </div>
        </div>
      </div>
    </>
  )
}

export default Allblood