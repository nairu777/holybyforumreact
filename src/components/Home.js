import React, {useContext} from 'react'
import {MyContext} from '../context/MyContext'


// Importing the Login & Register Component
import Login from './Login'
import Register from './Register'
import Topics from './topics/Topics'



function Home(){

    const {rootState,logoutUser} = useContext(MyContext);
    const {isAuth,theUser,showLogin} = rootState;


    // If user Logged in
    if(isAuth)
    {
        return(
            <div className="userInfo">
                <div className="_img"><span role="img" aria-label="User Image">👦</span></div>
                <h1>{theUser.username}</h1>
                <div className="_email"><span>{theUser.username}</span></div>
                <button onClick={logoutUser}>Logout</button>
                <Topics/>
            </div>
        )
    }
    // Showing Login Or Register Page According to the condition
    else if(showLogin){
        return <Login/>;
    }
    else{
        return <Register/>;
    }
}

export default Home;