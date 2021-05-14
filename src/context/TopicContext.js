import {authAxios} from "./http-common"

//get the topics per page(data)

const getTopics = (data) => {
    return authAxios.get("/topics?page=" + data.page).then(result => {
        console.log(result.data)
        return result.data
    })
}

const createTopic = data => {
    return authAxios.post("/createtopic", data);
};


export default{
    getTopics,
    createTopic
};