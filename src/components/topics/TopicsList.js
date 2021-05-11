import React, { useState, useEffect } from "react";
import TopicContextService from "../../context/TopicContext";

//render a list of topics based on page

const TopicList = () =>{
    const [topics, setTopics] = useState([]);

    useEffect(()=>{
        retrieveTopics();
    },[]);


    const retrieveTopics = () =>{
        TopicContextService.getTopics()
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
            <ul>
                {topics.map((topic)=>(
                    <li>
                        {topic.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default TopicList;