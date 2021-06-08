import {authAxios} from "./http-common"


//Topics
const getTopics = (data) => {
    return authAxios.get("/topics?page=" + data.page).then(result => {
        //console.log(result.data)
        return result.data
    })
}

const getTopicById = id => {
    return authAxios.get(`/topic/${id}` ).then(result => {
        //console.log(result.data)
        return result.data
    })
}

const createTopic = data => {
    return authAxios.post("/createtopic", data);
};

const updateTopic = (id, data) => {
    return authAxios.put(`/updatetopic/${id}`, data);
};

const deleteTopic = id => {
    return authAxios.delete(`/deletetopic/${id}`);
}

const searchTopic = term => {
    return authAxios.get(`/searchtopic/${term}` ).then(result => {
        //console.log(result.data)
        return result.data
    })
}

//reactions
const getTopicReactions = id =>{
    return authAxios.get( `/reactions/${id}` ).then(result => {
        //console.log(result.data)
        return result.data
    })
}

const createReaction = data => {
    return authAxios.post("/createreaction", data);
};

const updateReaction = (id, data) => {
    return authAxios.put(`/updatereaction/${id}`, data);
};

const deleteReaction = id => {
    return authAxios.delete(`/deletereactions/${id}`);
}

const searchReaction = term => {
    return authAxios.get(`/searchreactions/${term}` ).then(result => {
        //console.log(result.data)
        return result.data
    })
}



export default{
    getTopics,
    createTopic,
    getTopicReactions,
    getTopicById,
    updateTopic,
    deleteTopic,
    searchTopic,
    createReaction,
    updateReaction,
    deleteReaction,
    searchReaction

};