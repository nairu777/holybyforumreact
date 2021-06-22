import React, {useContext}from 'react'
import ReactionsList from "./ReactionList";
import AddTopic from "../topics/AddTopic";
import AddReaction from "./AddReaction";
import {Button} from "reactstrap";
import {Link} from "react-router-dom";




function Reactions(props) {
    const topicid = props.location.search.split("=")[1]

    return(
        <div>
            <h1>Topic with Reaction</h1>
            <div>
                <ReactionsList topicid={topicid}/>
            </div>
            <div>
                <h3>add reaction</h3>
                <AddReaction topicId={topicid}/>

            </div>
            <Link to="/">
                <Button>
                    <p>Terug</p>
                </Button>
            </Link>
        </div>
    )

}

export default Reactions;