import {useEffect, useState} from "react";
import UserContext from "../../context/UserContext";
import UserRenderer from "./userRenderer";


const MyProfileInformation = () =>{
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        retrieveUser();
    },[]);

    const retrieveUser = () =>{
        UserContext.getUser()
            .then(response =>{
                setUsers(response);
                console.log(response);
            })
            .catch(e =>{
                console.log(e);
            })
    };



    return(
        <div>
            <h4>profiel</h4>
                <UserRenderer username={users[0].username} email={users[0].email} status={users[0].status} />
        </div>
    )
};

export default MyProfileInformation;