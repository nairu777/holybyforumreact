import {Link} from "react-router-dom";
import {Button} from "reactstrap";
import MyProfileInformation from "./MyProfileInformation";



function Profile(){
    return(
        <div>
            <span>dit is mijn profiel</span>
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