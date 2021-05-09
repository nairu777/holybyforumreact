import {authAxios} from "./http-common"

//get the topics per page(data)

const getTopics = (data) => {
    return authAxios.get("/topics?page=" + data.page).then(result => {
        console.log(result.data)
    })
}
export default{
    getTopics
};