import {useEffect, useState} from "react";
import UserContext from "../../context/UserContext";
import UserRenderer from "./userRenderer";


const MyProfileInformation = () =>{
    const [user, setUser] = useState([]);

    useEffect(()=>{
        retrieveUser();
    },[]);

    const retrieveUser = () =>{
        UserContext.getUser()
            .then(response =>{
                setUser(response.data);
                console.log(response.data);
            })
            .catch(e =>{
                console.log(e);
            })
    };



    return(
        <div>
            {user.map((user)=>(
                <UserRenderer username={user.username} email={user.email} status={user.status} />
            ))}
        </div>
    )
};

export default MyProfileInformation;