import React,{useState,useEffect} from "react";
import { useHistory } from "react-router-dom";
import '../Admin.css'



const Formheading = () =>{

    return(
        <>
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

        </>
                 
    )
}

export default Formheading