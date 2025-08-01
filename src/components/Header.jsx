import { Fragment, useState } from "react";
// import { LOGO_URL } from "../utils/contants";
const logo = new URL('../../logo.svg', import.meta.url);

// import logo from '';
export const Header = ()=>{
    const [loginBtnText, setLoginBtnText] = useState("Login")
    console.log("updates")
    return (
        <div className='header'>
            <Fragment>
                <img className='logo' src={logo} alt="Logo"></img>
            </Fragment>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <li><button className="login-btn" onClick={()=>{loginBtnText=="Login"? setLoginBtnText("Logout"): setLoginBtnText("Login")}}>{loginBtnText}</button></li>
                </ul>
            </div>
        </div>
    )
}