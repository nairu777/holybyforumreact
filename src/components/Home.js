import React, {useContext} from 'react'
import {MyContext} from '../context/MyContext'


// Importing the Login & Register Component
import Login from './Login'
import Register from './Register'
import Topics from './topics/Topics'



function Home(props){

    const {rootState} = useContext(MyContext);
    const {isAuth,showLogin} = rootState;


    // If user Logged in
    if(isAuth)
    {
        return(
            <div style={props.style} className="topicField">

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