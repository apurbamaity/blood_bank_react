import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import '../Admin.css'
import Userdata from '../../Userdata.jsx'




const Allblood = () => {

  const [blood, setBlood] = useState([]);

  useEffect(() => {
    const url = process.env.REACT_APP_SERVER_URL
    axios.get(url + "/bloodbank/all")
      .then((response) => {
        setBlood(response.data)
        console.log(response.data)
      }, (error) => { })
  }, []);

  return (
    <>
      <div className="">
        <div className="admin_head_allbload">

          {/*<Userdata />*/}
          
          <div class="available_blood h2 p-3 my-3 mx-5">
            Available Blood Per Group As Per Packet
          </div>
          <div className="row px-5">


            {blood.map((d) => (
              /*<Sing name={d.name} link={d.imglink} />*/
              <>

                <div class="col-xl-12 col-12 blood_group_image_out  p-3">
                  <div class="blood_group_image_inside p-3">
                    <div class="row d-flex">
                      <div class="col-lg-6 mb-3">
                        <div class="blood_group_image p-large">
                          {d.name}
                        </div>
                      </div>
                      <div class="col-lg-6 mb-3 address">
                        <div class="blood_group_image p-small flex-right">
                          {d.address}
                        </div>
                      </div>

                    </div>

                    <div class="row">

                      <div class="d-flex flex-row all_blood">

                        <div class="px-2">
                          <div class="blood_group_image h5">
                            A+
                          </div>
                          <div class="blood_group_image h5">
                            {d.bloodStoreMap.aplus.toFixed(2)}
                          </div>
                        </div>

                        <div class="px-2">
                          <div class="blood_group_image h5">
                            B+
                          </div>
                          <div class="blood_group_image h5">
                            {d.bloodStoreMap.bplus.toFixed(2)}
                          </div>
                        </div>

                        <div class="px-2">
                          <div class="blood_group_image h5">
                            AB+
                          </div>
                          <div class="blood_group_image h5">
                            {d.bloodStoreMap.abplus.toFixed(2)}
                          </div>
                        </div>

                        <div class="px-2">
                          <div class="blood_group_image h5">
                            O+
                          </div>
                          <div class="blood_group_image h5">
                            {d.bloodStoreMap.oplus.toFixed(2)}
                          </div>
                        </div>

                        <div class="px-2">
                          <div class="blood_group_image h5">
                            A-
                          </div>
                          <div class="blood_group_image h5">
                            {d.bloodStoreMap.aminus.toFixed(2)}
                          </div>
                        </div>

                        <div class="px-2">
                          <div class="blood_group_image h5">
                            B-
                          </div>
                          <div class="blood_group_image h5">
                            {d.bloodStoreMap.bminus.toFixed(2)}
                          </div>
                        </div>

                        <div class="px-2">
                          <div class="blood_group_image h5">
                            AB-
                          </div>
                          <div class="blood_group_image h5">
                            {d.bloodStoreMap.abminus.toFixed(2)}
                          </div>
                        </div>

                        <div class="px-2">
                          <div class="blood_group_image h5">
                            O-
                          </div>
                          <div class="blood_group_image h5">
                            {d.bloodStoreMap.ominus.toFixed(2)}
                          </div>
                        </div>




                      </div>
                    </div>
                  </div>
                </div>


              </>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Allblood