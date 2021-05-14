import React, { useState, useEffect } from "react";
import TopicContextService from "../../context/TopicContext";
import TopicRenderer from "./TopicRenderer";

//render a list of topics based on page

const TopicList = () =>{
    const [topics, setTopics] = useState([]);

    useEffect(()=>{
        retrieveTopics();
    },[]);


    const retrieveTopics = () =>{
        TopicContextService.getTopics({page:1})
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
            <h4>Topic list</h4>
                {topics.map((topic)=>(
                    <TopicRenderer title={topic.title} username ={topic.username} content={topic.content}/>
                ))}
        </div>
    );
};
export default TopicList;