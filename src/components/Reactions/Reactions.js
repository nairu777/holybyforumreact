import React, {useContext}from 'react'
import ReactionsList from "./ReactionList";




function Reactions() {

    return(
        <div>
            <h1>Topic with Reaction</h1>
            <div>
                <ReactionsList/>
            </div>

        </div>
    )

}

export default Reactions;