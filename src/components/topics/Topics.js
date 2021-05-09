import React, {useContext}from 'react'
import { TopicContextProvider } from '../../context/TopicContext'
import TopicList from './TopicsList'


function Topics() {

    return(
        <div>
            <h1>Topics</h1>
            <div>
                <TopicList/>
            </div>
        </div>
    )

}

export default Topics;