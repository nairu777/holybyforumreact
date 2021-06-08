import React, {useContext}from 'react'
import TopicList from './TopicsList'
import AddTopicPopup from "./AddTopicPopup";



function Topics() {

    return(
        <div>
            <h1>Topics</h1>
            <div>
                <AddTopicPopup/>
            </div>
            <div>
                <TopicList/>
            </div>

        </div>
    )

}

export default Topics;