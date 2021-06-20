import React, {useContext}from 'react'
import ReactionsList from "./ReactionList";




function Reactions(props) {
    const topicid = props.location.search.split("=")[1]

    return(
        <div>
            <h1>Topic with Reaction</h1>
            <div>
                <ReactionsList topicid={topicid}/>
            </div>

        </div>
    )

}

export default Reactions;