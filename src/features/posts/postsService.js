import axios from "axios";

const API_URL = "http://localhost:8080";

const getAll = async () => {

    const res = await axios.get(API_URL + "/posts/find");

    return res.data;

};

const getById = async (id) => {

    const res = await axios.get(API_URL + "/posts/find/id/" + id);

    return res.data;

};

const getPostByName = async (postTitle) => {
    const res = await axios.get(API_URL + "/posts/find/title/" + postTitle);
    return res.data;
};

const getComments = async (id) => {
    const res = await axios.get(API_URL + "/comments/find/id/" + id)
    return res.data;
}

const create = async (postData) => {

    const res = await axios.post(API_URL + "/posts/create", postData);

    return res.data;

};

const postsService = {

    getAll,
    getById,
    getPostByName,
    getComments,
    create

};

export default postsService;