import React, { useState, useEffect } from "react";
import TopicContextService from "../../context/TopicContext";
import TopicRenderer from "./TopicRenderer";

//render a list of topics on search

const SearchTopicList = () =>{

    const [term, setTerm] = useState("");

    useEffect(()=>{
        searchTopics();
    },[]);


    const searchTopics = () => {
        var data = {
            term:this.term
        }
        TopicContextService.searchTopic(data)
            .then(response => {
                setTopics(response.data);
                console.log(response.data);
            })
            .catch(e =>{
                console.log(e);
            })
    };

    return(
        <div>
            <h4>gevonden topics</h4>
            {topics.map((topic)=>(
                <TopicRenderer title={topic.title} username ={topic.username} content={topic.content} />
            ))}
        </div>
    );
};
export default SearchTopicList;