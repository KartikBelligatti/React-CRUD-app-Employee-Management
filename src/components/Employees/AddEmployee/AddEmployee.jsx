import axios from "axios";
import React, { useRef } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from 'sweetalert';  
import Popup from 'reactjs-popup';
import { Route } from "react-router-dom";

let AddEmployee = () => {
    const empName = useRef("");
    const band=useRef("");
    const role=useRef("");
    const designation=useRef("");
    const resp=useRef("");
    const url=useRef("");

    let navigate = useNavigate();
    let flag=false;

    const[modal, setModal] = useState(false)

    function addemployeeHandler(){
        var payload = {
            
            employeeName: empName.current.value,
            band: band.current.value,
            role: role.current.value,
            designation: designation.current.value,
            responsibilities: resp.current.value,
            imageUrl: url.current.value
        }

       axios.post("https://localhost:7134/api/Employees" , payload)
       .then((response) => {
        navigate('/employees/list')
        
       })
        
            

                
                
           
       
    }



    return(
        <React.Fragment>
            
            <section className="add-employee p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3  fw-bold" style={{color:'pink', fontSize:40,padding:10,fontFamily:'sans-serif'}}>
                                Create Employee
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <form 
                             style={{ 
                             color: 'black',
                             width:535,
                             fontSize:18,
                             borderBlockColor:'white',
                             opacity: 0.8}} >
                                <div className="mb-2">


                                    <input
                                    required={true}
                                     type="text" className="form-control" placeholder="Name"  ref={empName} name="name"  />
                                </div>
                                <div className="mb-2">
                                    <input  type="text" className="form-control" placeholder="Band" ref={band} required={true}/>
                                </div>
                                <div className="mb-2">
                                    <input type="text" className="form-control" placeholder="Role" ref={role}/>
                                </div>
                                <div className="mb-2">
                                    <input type="text" className="form-control" placeholder="Desingnation" ref={designation}/>
                                </div>
                                <div className="mb-2">
                                    <input type="text" className="form-control" placeholder="Responsibilites" ref={resp}/>
                                </div>
                                <div className="mb-2">
                                    <input type="text" className="form-control" placeholder="Photo Url" ref={url}/>
                                </div>
                                <div className="mb-2">
                                <input  type="submit" className="btn btn-success" placeholder="Create" onClick={addemployeeHandler} />
                               
                                
                               
                                    <Link to={'/employees/list'} className="btn btn-warning ms-2" >Cancel</Link>
                                </div>
                               
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};

export default AddEmployee;