import React, { useState } from 'react';
import './navbar.css';
import {
    Link,
} from "react-router-dom";
function Navbar() {

    const [showmenu, setShowmenu] = useState(false);
    function showmenubtn() {
        setShowmenu(!showmenu);
    }


    // window.onclick = function (event) {
    //     console.log(!event.target.matches('#menu'));
    //             showmenubtn(!showmenu)
    // }

    return (
        <>
            <nav>
                <div className='container-fluid'>
                    <div className='row1'>
                        <div className='logo'>
                            <Link to="/"><img src='https://www.cowin.gov.in/assets/images/new-logo.svg' className='image-fluid'></img></Link>
                        </div>
                        <div className='menuandbtn-container'>
                            <div id='menu' className={`menu ${showmenu ? "menushow" : ""}`}>
                                <ul>
                                    <li><Link to="/ABHA (Health ID)">ABHA (Health ID)</Link></li>
                                    <li><Link to="/dashboard">dashboard</Link></li>
                                    <li><Link to="/certificate">verify certificate</Link></li>
                                    <li><Link to="/faq">faq</Link></li>
                                    <li><Link to="/partners">partners</Link></li>
                                </ul>
                            </div>
                            <div className='signbtn'>
                                <Link to='/registerforvaccine'>register/sigin</Link>
                            </div>
                            <div className="menubtn">
                                <i onClick={showmenubtn} className="menudottedbtn bi bi-three-dots-vertical"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
