import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Requestblood from './Requestblood.jsx'
import axios from "axios";
import '../User.css'
import Userdata from '../../Userdata.jsx'




const Allblood = () => {

  const map1 = new Map();
  map1.set(1, { "type": "A+", "price": 1000 });
  map1.set(2, { "type": "B+", "price": 1050 });
  map1.set(3, { "type": "AB+", "price": 1300 });
  map1.set(4, { "type": "O+", "price": 800 });
  map1.set(5, { "type": "A-", "price": 1200 });
  map1.set(6, { "type": "B-", "price": 1250 });
  map1.set(7, { "type": "AB-", "price": 1500 });
  map1.set(8, { "type": "O-", "price": 1000 });


  const [blood, setBlood] = useState([]);
  const setbloodammount = () => {
    const url = process.env.REACT_APP_SERVER_URL
    axios.get(url + "/bloodbank/all")
      .then((response) => {
        console.log(response.data)
        setBlood(response.data)
      }, (error) => { })
  }

  useEffect(() => {
    setbloodammount()
  }, []);

  return (
    <>
      <div className="">
        <div className="">

          <Userdata />
          <div class="available_blood h2 px-3 mt-2 mx-5">
            Available Blood Per Group As Per Litre
          </div>
          <div className="row px-5">


            {blood.map((d) => (
              /*<Sing name={d.name} link={d.imglink} />*/
              <>

                <div class="col-xl-12 col-12 blood_group_image_out  p-3">
                  <div class="blood_group_image_inside p-3">

                    {/* blood bank name and address*/}
                    <div class="row d-flex">
                      <div class="col-lg-6">
                        <div class="blood_group_image h3">
                          <img src="blood.png" class="blood_img" />{d.name}
                        </div>
                      </div>
                      <div class="col-lg-6 address">
                        <div class="blood_group_image p-small flex-right">
                          {d.address}
                        </div>
                      </div>
                    </div>{/* blood bank name and address*/}



                    <div class="row">

                      {/* blood bank available stock*/}
                      <div class="col-xl-6">
                        <div class="h5 py-2 text-danger">
                          Available quantity in Litre
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
                      </div>{/* blood bank available stock*/}


                      {/* blood bank blood price*/}
                      <div class="col-xl-6">
                        <div class="h5 py-2 text-danger">
                          Blood price per group per liter in rs.
                        </div>
                        <div class="row">
                          <div class="d-flex flex-row all_blood">

                            <div class="px-2">
                              <div class="blood_group_image h5">
                                A+
                              </div>
                              <div class="blood_group_image h5">
                                {map1.get(1).price}
                              </div>
                            </div>

                            <div class="px-2">
                              <div class="blood_group_image h5">
                                B+
                              </div>
                              <div class="blood_group_image h5">
                                {map1.get(2).price}
                              </div>
                            </div>

                            <div class="px-2">
                              <div class="blood_group_image h5">
                                AB+
                              </div>
                              <div class="blood_group_image h5">
                                {map1.get(3).price}
                              </div>
                            </div>

                            <div class="px-2">
                              <div class="blood_group_image h5">
                                O+
                              </div>
                              <div class="blood_group_image h5">
                                {map1.get(4).price}
                              </div>
                            </div>

                            <div class="px-2">
                              <div class="blood_group_image h5">
                                A-
                              </div>
                              <div class="blood_group_image h5">
                                {map1.get(5).price}
                              </div>
                            </div>

                            <div class="px-2">
                              <div class="blood_group_image h5">
                                B-
                              </div>
                              <div class="blood_group_image h5">
                                {map1.get(6).price}
                              </div>
                            </div>

                            <div class="px-2">
                              <div class="blood_group_image h5">
                                AB-
                              </div>
                              <div class="blood_group_image h5">
                                {map1.get(7).price}
                              </div>
                            </div>

                            <div class="px-2">
                              <div class="blood_group_image h5">
                                O-
                              </div>
                              <div class="blood_group_image h5">
                                {map1.get(8).price}
                              </div>
                            </div>

                          </div>
                        </div>

                      </div>{/* blood bank blood price*/}

                    </div>
                  </div>
                </div>


              </>
            ))}
            <Requestblood setbloodammount={setbloodammount} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Allblood