import React, { useState, useEffect } from "react";
import TopicContextService from "../../context/TopicContext";
import TopicRenderer from "../topics/TopicRenderer";

//render a topic and a list of reactions

const ReactionsList = () =>{
    const [reactions, setReactions] = useState([]);

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

    return(
        <div>
            <h4>Topic with reaction list</h4>
            {reactions.map((reaction)=>(
                <TopicRenderer title={reaction.title} username ={reaction.username} content={reaction.content} />
            ))}
        </div>
    );
};
export default ReactionsList;