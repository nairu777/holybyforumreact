import React, {useContext} from 'react'
import {MyContext} from '../../context/MyContext'
import { Link} from 'react-router-dom';



function Header(props) {
    const {rootState, logoutUser} = useContext(MyContext);
    const {isAuth, theUser} = rootState;


    // If user Logged in, logoutbutton in header
    if (isAuth) {
        return (
            <div style={props.style} >
                <div  style={props.style} ><h1>Holybe forum</h1></div>
                <div>
                    <div  style={props.style}  className="_img"><span role="img" aria-label="User Image">👦</span></div>
                    <div  style={props.style} ><Link to="/profile"><span>{theUser.username}</span></Link></div>
                    <div  style={props.style} ><button onClick={logoutUser}>Logout</button></div>
                </div>
            </div>
        )
    }

    else{
    return (
        <div>
            <h1>Holybe forum</h1>
        </div>
    )}
}

export default Header;