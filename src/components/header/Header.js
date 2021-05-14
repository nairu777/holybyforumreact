import React, {useContext} from 'react'
import {MyContext} from '../../context/MyContext'


function Header(props) {
    const {rootState, logoutUser} = useContext(MyContext);
    const {isAuth, theUser, showLogin} = rootState;


    // If user Logged in, logoutbutton in header
    if (isAuth) {
        return (
            <div style={props.style} >
                <div><h1>Holybe forum</h1></div>
                <div className="_img"><span role="img" aria-label="User Image">👦</span></div>
                <div><span>{theUser}</span></div>
                <div><button onClick={logoutUser}>Logout</button></div>
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