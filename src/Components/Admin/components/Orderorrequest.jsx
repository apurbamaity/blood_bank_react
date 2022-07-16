import React,{useState,useEffect} from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Allorders from "./Allorders.jsx"
import '../Admin.css'

const Orderorrequest = (props) =>{

    if(props.single.status ==="approved" && props.status==="1"){
        return(
            <>
               
                        <div class="single_request row p-0">
                        <div class="col-xl-3 col-12 blood_group_image_out1 p-small">
                            <div class="order">
                                {props.single.useremail}
                            </div>
                        </div>
                        <div class="col-xl-2 col-12 blood_group_image_out1 p-small">
                            <div class="order">
                                sankrail, Howrah
                                <div class="hello">711313</div>
                            </div>
                        </div>
                        <div class="col-xl-1 col-12 blood_group_image_out1 p-large">
                            <div class="order">
                            {props.single.price}
                            </div>
                        </div>
                        <div class="col-xl-1 col-12 blood_group_image_out1 p-large">
                            <div class="order">
                                {props.single.amount}L
                            </div>
                        </div>
                        
                        <div class="col-xl-1 col-12 blood_group_image_out1 p-large text-left">
                            <div class="order">
                                {props.single.type}
                            </div>
                        </div>
                        <div class="col-xl-2 col-12 blood_group_image_out1 p-large text-left">
                            <div class="order">
                                {props.single.orderdate}
                            </div>
                        </div>




                        <div class="col-xl-2 col-12 blood_group_image_out1 p-large py-2">
                            <div class="approved">
                            <div class="d-flex flex-row p-large" >
                                <div class="px-2"><input type="submit" value="approved" /> </div>
                                <div class=""><i class="fa-solid fa-circle-check fa-2x"></i></div>
                            </div>
                            </div>
                        </div>



                        </div>
                        
            </>
        )
    }else{
        return(
            <>
            </>
        )
    }
    
}

export default Orderorrequest