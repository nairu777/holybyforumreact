import {Link} from "react-router-dom";
import {Button} from "reactstrap";
import MyProfileInformation from "./MyProfileInformation";
import {MyContext} from "../../context/MyContext";
import {useContext} from "react";



function Profile(){
    const {rootState} = useContext(MyContext);
    const {theUser} = rootState;

    return(
        <div>
            <span>profiel van {theUser.username}</span>
            <MyProfileInformation/>

            <Link to="/">
                <Button>
                    <p>Terug</p>
                </Button>
            </Link>
        </div>
    )
}

export default Profile;