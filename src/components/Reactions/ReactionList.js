import React, { useState, useEffect } from "react";
import TopicContextService from "../../context/TopicContext";
import TopicRenderer from "../topics/TopicRenderer";
import ReactionRenderer from "./ReactionRenderer";

//render a topic and a list of reactions

const ReactionsList = () =>{
    const [reactions, setReactions] = useState([]);
    const [topics, setTopics ] = useState([])

    useEffect(()=>{
        retrieveReactions();
    },[]);


    const retrieveReactions = () =>{
        TopicContextService.getTopicReactions()
            .then(response =>{
                setReactions(response);
                console.log(response);
            })
            .catch(e =>{
                console.log(e);
            })
    };

    useEffect(()=>{
        retrieveTopics();
    },[]);


    const retrieveTopics = () =>{
        TopicContextService.getTopicById()
            .then(response =>{
                setTopics(response.data);
                console.log(response.data);
            })
            .catch(e =>{
                console.log(e);
            })
    };

    return(
        <div>
            <h4>Topic with reaction list</h4>
            {topics.map((topic)=>(
                <TopicRenderer  title={topic.title} username ={topic.username} content={topic.content} />
            ))}
            {reactions.map((reaction)=>(
                <ReactionRenderer username ={reaction.username} content={reaction.content} />
            ))}
        </div>
    );
};
export default ReactionsList;