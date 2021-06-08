import React, {useState} from 'react';
import {Button, Modal} from "reactstrap";
import AddTopic from "./AddTopic";

function AddTopicPopup() {
    //todo popup screen for adding topic

            let bool = false
            const [showText, setShowText] = useState(bool );

            const onClick = () => {
            bool=!bool
            setShowText(bool);
        }
            //todo fix click twice to remove form

            return (
            <div>
                <h3>add topic</h3>
                <button onClick={onClick}>add topic form</button>
                {showText ? <AddTopic/> : null}

            </div>
            );


}

export default AddTopicPopup