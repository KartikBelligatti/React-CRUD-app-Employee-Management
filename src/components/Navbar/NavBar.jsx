import React from "react";
import { useState, useEffect } from "react";

let NavBar = () => {

    const[clockState, setClockState] = useState();
    const[clockState1, setClockState1] = useState();
    const[show,setShow]=useState(false);
    const toggler = () => {
        show ? setShow(false) : setShow(true);
    }

    useEffect(()=> {
        setInterval(() => {
            const date = new Date();
            setClockState(date.toLocaleTimeString());
            setClockState1(date.toLocaleTimeString('en-GB'));

        }, 1000);

    },[])

    return(
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expanf-sm">
                <div className="container">
                    <a to={'/'} className="navbar-brand" ><i class=" fa fa-light fa-wand-magic-sparkles text-warning"></i>&nbsp;&nbsp;Tieto <span className="text-warning">EVRY</span> </a>
                </div>
                <div>
                <select name="cars" id="cars"  style={{backgroundColor:'yellow', marginRight:10}}>
                    <option value="volvo">{clockState}</option>
                    <option value="saab">{clockState1}</option>
                </select>
                </div>
                
                {/* <div className="btn btn-light" style={{color:'black', marginRight:10}} onClick={toggler}>{show ? <span>{clockState1}&nbsp;&nbsp;&nbsp;&nbsp;     </span> : <span>{clockState}</span>}</div> */}
                
                {/* <div style={{color:'white', marginRight:10}}>{clockState}</div> */}

            </nav>
        </React.Fragment>
    )
};

export default NavBar;