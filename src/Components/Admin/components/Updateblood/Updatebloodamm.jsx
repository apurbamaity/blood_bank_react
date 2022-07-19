import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import './Updateblood.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isloggedin, getuserrole, setloggedinuser, getloggedinuserdata } from '../../../Methods/trytoregister.jsx'




// change state with choosing new blood type..
const Choosedbloodtye = (props) => {
  if (props.bloodtype == 1) {
    return (
      <>
        <div class="d-flex flex-row all_blood">

          <div class="px-1 highlight_this" onClick={() => props.updateBlood(1)}>
            <div class="blood_group_image h5">
              A+
            </div>
          </div>

          <div class="px-2" onClick={() => props.updateBlood(2)}>
            <div class="blood_group_image h5">
              B+
            </div>

          </div>

          <div class="px-2" onClick={() => props.updateBlood(3)}>
            <div class="blood_group_image h5">
              AB+
            </div>

          </div>

          <div class="px-2" onClick={() => props.updateBlood(4)}>
            <div class="blood_group_image h5">
              O+
            </div>

          </div>

          <div class="px-2" onClick={() => props.updateBlood(5)}>
            <div class="blood_group_image h5">
              A-
            </div>

          </div>

          <div class="px-2" onClick={() => props.updateBlood(6)}>
            <div class="blood_group_image h5">
              B-
            </div>

          </div>

          <div class="px-2" onClick={() => props.updateBlood(7)}>
            <div class="blood_group_image h5">
              AB-
            </div>

          </div>

          <div class="px-2" onClick={() => props.updateBlood(8)}>
            <div class="blood_group_image h5">
              O-
            </div>
          </div>

        </div>
      </>
    )
  } else if (props.bloodtype == 2) {
    return (
      <>
        <div class="d-flex flex-row all_blood">
          <div class="px-2" onClick={() => props.updateBlood(1)}>
            <div class="blood_group_image h5">
              A+
            </div>
          </div>

          <div class="px-1 highlight_this" onClick={() => props.updateBlood(2)}>
            <div class="blood_group_image h5">
              B+
            </div>

          </div>

          <div class="px-2" onClick={() => props.updateBlood(3)}>
            <div class="blood_group_image h5">
              AB+
            </div>

          </div>

          <div class="px-2" onClick={() => props.updateBlood(4)}>
            <div class="blood_group_image h5">
              O+
            </div>

          </div>

          <div class="px-2" onClick={() => props.updateBlood(5)}>
            <div class="blood_group_image h5">
              A-
            </div>

          </div>

          <div class="px-2" onClick={() => props.updateBlood(6)}>
            <div class="blood_group_image h5">
              B-
            </div>

          </div>

          <div class="px-2" onClick={() => props.updateBlood(7)}>
            <div class="blood_group_image h5">
              AB-
            </div>

          </div>

          <div class="px-2" onClick={() => props.updateBlood(8)}>
            <div class="blood_group_image h5">
              O-
            </div>
          </div>

        </div>
      </>
    )
  } else if (props.bloodtype == 3) {
    return (
      <>
        <div class="d-flex flex-row all_blood">
          <div class="px-2" onClick={() => props.updateBlood(1)}>
            <div class="blood_group_image h5">
              A+
            </div>
          </div>

          <div class="px-2" onClick={() => props.updateBlood(2)}>
            <div class="blood_group_image h5">
              B+
            </div>

          </div>

          <div class="px-1 highlight_this" onClick={() => props.updateBlood(3)}>
            <div class="blood_group_image h5">
              AB+
            </div>

          </div>

          <div class="px-2" onClick={() => props.updateBlood(4)}>
            <div class="blood_group_image h5">
              O+
            </div>

          </div>

          <div class="px-2" onClick={() => props.updateBlood(5)}>
            <div class="blood_group_image h5">
              A-
            </div>

          </div>

          <div class="px-2" onClick={() => props.updateBlood(6)}>
            <div class="blood_group_image h5">
              B-
            </div>

          </div>

          <div class="px-2" onClick={() => props.updateBlood(7)}>
            <div class="blood_group_image h5">
              AB-
            </div>

          </div>

          <div class="px-2" onClick={() => props.updateBlood(8)}>
            <div class="blood_group_image h5">
              O-
            </div>
          </div>

        </div>
      </>
    )
  } else if (props.bloodtype == 4) {
    return (
      <>
        <div class="d-flex flex-row all_blood">
          <div class="px-2" onClick={() => props.updateBlood(1)}>
            <div class="blood_group_image h5">
              A+
            </div>
          </div>

          <div class="px-2" onClick={() => props.updateBlood(2)}>
            <div class="blood_group_image h5">
              B+
            </div>

          </div>

          <div class="px-2" onClick={() => props.updateBlood(3)}>
            <div class="blood_group_image h5">
              AB+
            </div>

          </div>

          <div class="px-1 highlight_this" onClick={() => props.updateBlood(4)}>
            <div class="blood_group_image h5">
              O+
            </div>

          </div>

          <div class="px-2" onClick={() => props.updateBlood(5)}>
            <div class="blood_group_image h5">
              A-
            </div>

          </div>

          <div class="px-2" onClick={() => props.updateBlood(6)}>
            <div class="blood_group_image h5">
              B-
            </div>

          </div>

          <div class="px-2" onClick={() => props.updateBlood(7)}>
            <div class="blood_group_image h5">
              AB-
            </div>

          </div>

          <div class="px-2" onClick={() => props.updateBlood(8)}>
            <div class="blood_group_image h5">
              O-
            </div>
          </div>

        </div>
      </>
    )
  } else if (props.bloodtype == 5) {
    return (
      <>
        <div class="d-flex flex-row all_blood">
          <div class="px-2" onClick={() => props.updateBlood(1)}>
            <div class="blood_group_image h5">
              A+
            </div>
          </div>

          <div class="px-2" onClick={() => props.updateBlood(2)}>
            <div class="blood_group_image h5">
              B+
            </div>

          </div>

          <div class="px-2" onClick={() => props.updateBlood(3)}>
            <div class="blood_group_image h5">
              AB+
            </div>

          </div>

          <div class="px-2" onClick={() => props.updateBlood(4)}>
            <div class="blood_group_image h5">
              O+
            </div>

          </div>

          <div class="px-1 highlight_this" onClick={() => props.updateBlood(5)}>
            <div class="blood_group_image h5">
              A-
            </div>

          </div>

          <div class="px-2" onClick={() => props.updateBlood(6)}>
            <div class="blood_group_image h5">
              B-
            </div>

          </div>

          <div class="px-2" onClick={() => props.updateBlood(7)}>
            <div class="blood_group_image h5">
              AB-
            </div>

          </div>

          <div class="px-2" onClick={() => props.updateBlood(8)}>
            <div class="blood_group_image h5">
              O-
            </div>
          </div>

        </div>
      </>
    )
  } else if (props.bloodtype == 6) {
    return (
      <>
        <div class="d-flex flex-row all_blood">
          <div class="px-2" onClick={() => props.updateBlood(1)}>
            <div class="blood_group_image h5">
              A+
            </div>
          </div>

          <div class="px-2" onClick={() => props.updateBlood(2)}>
            <div class="blood_group_image h5">
              B+
            </div>

          </div>

          <div class="px-2" onClick={() => props.updateBlood(3)}>
            <div class="blood_group_image h5">
              AB+
            </div>

          </div>

          <div class="px-2" onClick={() => props.updateBlood(4)}>
            <div class="blood_group_image h5">
              O+
            </div>

          </div>

          <div class="px-2" onClick={() => props.updateBlood(5)}>
            <div class="blood_group_image h5">
              A-
            </div>

          </div>

          <div class="px-1 highlight_this" onClick={() => props.updateBlood(6)}>
            <div class="blood_group_image h5">
              B-
            </div>

          </div>

          <div class="px-2" onClick={() => props.updateBlood(7)}>
            <div class="blood_group_image h5">
              AB-
            </div>

          </div>

          <div class="px-2" onClick={() => props.updateBlood(8)}>
            <div class="blood_group_image h5">
              O-
            </div>
          </div>

        </div>
      </>
    )
  } else if (props.bloodtype == 7) {
    return (
      <>
        <div class="d-flex flex-row all_blood">
          <div class="px-2" onClick={() => props.updateBlood(1)}>
            <div class="blood_group_image h5">
              A+
            </div>
          </div>

          <div class="px-2" onClick={() => props.updateBlood(2)}>
            <div class="blood_group_image h5">
              B+
            </div>

          </div>

          <div class="px-2" onClick={() => props.updateBlood(3)}>
            <div class="blood_group_image h5">
              AB+
            </div>

          </div>

          <div class="px-2" onClick={() => props.updateBlood(4)}>
            <div class="blood_group_image h5">
              O+
            </div>

          </div>

          <div class="px-2" onClick={() => props.updateBlood(5)}>
            <div class="blood_group_image h5">
              A-
            </div>

          </div>

          <div class="px-2" onClick={() => props.updateBlood(6)}>
            <div class="blood_group_image h5">
              B-
            </div>

          </div>

          <div class="px-1 highlight_this" onClick={() => props.updateBlood(7)}>
            <div class="blood_group_image h5">
              AB-
            </div>

          </div>

          <div class="px-2" onClick={() => props.updateBlood(8)}>
            <div class="blood_group_image h5">
              O-
            </div>
          </div>

        </div>
      </>
    )
  } else {
    return (
      <>
        <div class="d-flex flex-row all_blood">
          <div class="px-2" onClick={() => props.updateBlood(1)}>
            <div class="blood_group_image h5">
              A+
            </div>
          </div>

          <div class="px-2" onClick={() => props.updateBlood(2)}>
            <div class="blood_group_image h5">
              B+
            </div>

          </div>

          <div class="px-2" onClick={() => props.updateBlood(3)}>
            <div class="blood_group_image h5">
              AB+
            </div>

          </div>

          <div class="px-2" onClick={() => props.updateBlood(4)}>
            <div class="blood_group_image h5">
              O+
            </div>

          </div>

          <div class="px-2" onClick={() => props.updateBlood(5)}>
            <div class="blood_group_image h5">
              A-
            </div>

          </div>

          <div class="px-2" onClick={() => props.updateBlood(6)}>
            <div class="blood_group_image h5">
              B-
            </div>

          </div>

          <div class="px-2" onClick={() => props.updateBlood(7)}>
            <div class="blood_group_image h5">
              AB-
            </div>

          </div>

          <div class="px-1 highlight_this" onClick={() => props.updateBlood(8)}>
            <div class="blood_group_image h5">
              O-
            </div>
          </div>

        </div>
      </>
    )
  }
}


const Updatebloodamm = (props) => {

  const map1 = new Map();
  map1.set(1, { "type": "A+", "price": 1000 });
  map1.set(2, { "type": "B+", "price": 1050 });
  map1.set(3, { "type": "AB+", "price": 1300 });
  map1.set(4, { "type": "O+", "price": 800 });
  map1.set(5, { "type": "A-", "price": 1200 });
  map1.set(6, { "type": "B-", "price": 1250 });
  map1.set(7, { "type": "AB-", "price": 1500 });
  map1.set(8, { "type": "O-", "price": 1000 });

  const [bloodtype, setBloodtype] = useState(1)
  const [bloodamm, setBloodamm] = useState(0)
  const [bloodprice, setBloodprice] = useState(0)



  //update blood type here..
  const updateBlood = (id) => {
    setBloodtype(id)
    setBloodamm(0)
    setBloodprice(0)
  }
  //increase blood ammount
  const increaseBlood = () => {
    setBloodamm(bloodamm + .5)
  }
  //decrease blood ammount..
  const decreaseBlood = () => {
    if (bloodamm != 0) {
      setBloodamm(bloodamm - .5)
    }

  }


  //submit a booking..
  const updatebloodamn = () => {

    if (bloodamm === 0) {
      toast.error("quantity must be more than 0", {
        position: "top-right", autoClose: 2000,
      })
      return;
    }
    

    let newbloodbank = props.bloodbank;
    // manipuaalte this when real order is placed..
    if(bloodtype==1){
      newbloodbank.bloodStoreMap.aplus = props.bloodbank.bloodStoreMap.aplus+bloodamm;
    }else if(bloodtype==2){
      newbloodbank.bloodStoreMap.bplus = props.bloodbank.bloodStoreMap.bplus+bloodamm;
    }else if(bloodtype==3){
      newbloodbank.bloodStoreMap.abplus = props.bloodbank.bloodStoreMap.abplus+bloodamm;
    }else if(bloodtype==4){
      newbloodbank.bloodStoreMap.oplus = props.bloodbank.bloodStoreMap.oplus+bloodamm;
    }else if(bloodtype==5){
      newbloodbank.bloodStoreMap.aminus = props.bloodbank.bloodStoreMap.aminus+bloodamm;
    }else if(bloodtype==6){
      newbloodbank.bloodStoreMap.bminus = props.bloodbank.bloodStoreMap.bminus+bloodamm;
    }else if(bloodtype==7){
      newbloodbank.bloodStoreMap.abminus = props.bloodbank.bloodStoreMap.abminus+bloodamm;
    }else{
      newbloodbank.bloodStoreMap.ominus = props.bloodbank.bloodStoreMap.ominus+bloodamm;
    }

    console.log(newbloodbank)

    

    axios.post(process.env.REACT_APP_SERVER_URL + "/admin/bloodbank/update", newbloodbank)
      .then((response) => {
        console.log(response.data)
        if (response.data == false) {
          toast.error("quantity Not available but check soon", {
            position: "top-right", autoClose: 2000,
          })
          
          return;
        } else {
          props.bloodammnupdate();
          toast.success("🆗 Quantity Updated..", {
            position: "top-right", autoClose: 2000,
          })
          return;
        }
      }, (error) => { })
  }

  // return requested and ordered items by individual user..
  return (
    <>
      <ToastContainer />
      <div>
        <div class="py-3">

          <div class="available_blood h2">
            Update Blood Stock
          </div>

          <div class="row order_out mx-2 py-3">


            <div class="col-xl-4 h3">
              <div class="py-2">
                Choose Bloodtype
              </div>
              <div class="make_it_pointer">
                <Choosedbloodtye updateBlood={updateBlood} bloodtype={bloodtype} />
              </div>
            </div>


            <div class="col-xl-2 h5">
              <div class="py-2">
                Choose Quantity
              </div>
              <div class="">
                <div class="d-flex flex-row align-items-center">
                  <div class="sign px-2 make_it_pointer" onClick={decreaseBlood}>
                    <i class="fa-solid fa-minus"></i>
                  </div>
                  <div class="h2 px-2 bloodamm_input">
                    {bloodamm}
                  </div>
                  <div class="sign px-2 make_it_pointer" onClick={increaseBlood}>
                    <i class="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
            </div>

            

            <div class="col-xl-4 d-flex align-items-center make_it_pointer" onClick={updatebloodamn}>
              <div class="h3 p-2 order_button_out">
                Update Blood Quantity
              </div>
            </div>



          </div>
        </div>
      </div>
    </>
  )
}

export default Updatebloodamm