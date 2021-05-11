import React, {useContext}from 'react'
import TopicList from './TopicsList'
import AddTopic from "./AddTopic";


function Topics() {

    return(
        <div>
            <h1>Topics</h1>
            <div>
                <TopicList/>
            </div>
            <div>
                <AddTopic/>
            </div>
        </div>
    )

}

export default Topics;