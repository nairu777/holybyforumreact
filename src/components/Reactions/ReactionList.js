import React, { useState, useEffect } from "react";
import TopicContextService from "../../context/TopicContext";
import TopicRenderer from "../topics/TopicRenderer";
import ReactionRenderer from "./ReactionRenderer";
import {Link} from "react-router-dom";

//render a topic and a list of reactions

const ReactionsList = (props) =>{
    const [reactions, setReactions] = useState([]);
    const [topics, setTopics ] = useState([])

    useEffect(()=>{
        retrieveReactions();
        retrieveTopics();
    },[props.topicid]);

    function onChange(){
        retrieveReactions()
    }

    const retrieveReactions = () =>{
        TopicContextService.getTopicReactions(props.topicid)
            .then(response =>{
                setReactions(response);
                console.log(response);
            })
            .catch(e =>{
                console.log(e);
            })
    };


    const retrieveTopics = () =>{
        TopicContextService.getTopicById(props.topicid)
            .then(response =>{
                setTopics(response);
                console.log(response);
            })
            .catch(e =>{
                console.log(e);
            })
    };

    return(
        <div>
            <h4>Topic with reaction list</h4>
            {topics.map((topic)=>(
                <div>
                    <span >{topic.title}</span>
                    <span >{topic.username}</span>
                    <span >{topic.content}</span>
                </div>

            ))}

            {reactions.map((reaction)=>(
                <ReactionRenderer key={reaction.id} username ={reaction.username} userid={reaction.user_id} content={reaction.content} reactionid={reaction.id} onChange={onChange}/>
            ))}
        </div>
    );
};
export default ReactionsList;