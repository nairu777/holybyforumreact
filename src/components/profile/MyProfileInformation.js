import {useEffect, useState} from "react";
import UserContext from "../../context/UserContext";
import UserRenderer from "./userRenderer";
import React, {useContext} from 'react'
import {MyContext} from "../../context/MyContext";


function MyProfileInformation () {
    const {rootState} = useContext(MyContext);
    const {isAuth, theUser} = rootState;


    if (isAuth) {
        return (
            <div>
                <h2>profiel</h2>
                <p>username = {theUser.username}</p>
                <p>email = {theUser.email}</p>
            </div>
        )
    }
    else{
        return (
            <div>

                <p>no user found</p>
            </div>)
    }
}


//     const [users, setUsers] = useState('');
//
//     useEffect(()=>{
//         retrieveUser();
//     },[]);
//
//     const retrieveUser = () =>{
//         UserContext.getUser()
//             .then(response =>{
//                 setUsers(response);
//                 console.log(response);
//             })
//             .catch(e =>{
//                 console.log(e);
//             })
//     };
//
//
//
//     return(
//         <div>
//             <h4>profiel</h4>
//                 <UserRenderer username={users[0].username} email={users[0].email} status={users[0].status} />
//         </div>
//     )
// };

export default MyProfileInformation;