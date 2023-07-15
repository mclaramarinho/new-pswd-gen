import logo from '../assets/logo-sm.png'
import React from "react";
import '../styles.css';

function Header(){
    return(
        <div>
            <div>
                <img src={logo} alt='logo-img' />
            </div>
            <div>
                <h1>PASSWORD GENERATOR</h1>
            </div>
            <div>
                <p id='desc'>Create strong and secure passwords to keep your account safe online.</p>
            </div>
        </div>
    )
}

export default Header;