import React, {useContext, useState} from 'react'
import TopicList from './TopicsList'
import AddTopicPopup from "./AddTopicPopup";
import AddTopic from "./AddTopic";



function Topics() {
    // let bool = false
    // const [showText, setShowText] = useState(bool );
    //
    // const onClick = () => {
    //     bool = !bool
    //     setShowText(bool);
    // }
    const [newTopic, setNewTopic] = useState(false)

    function toggleNewTopic(){
        setNewTopic(!newTopic)
    }


    return(
        <div>
            <h1>Topics</h1>

                {newTopic? (
                    <AddTopic />
                ):(null)
                }
                <div>
                    <button onClick={toggleNewTopic}>
                        Nieuw topic
                    </button>
                </div>

            <div>
                <TopicList/>
            </div>

        </div>
    )

}

export default Topics;