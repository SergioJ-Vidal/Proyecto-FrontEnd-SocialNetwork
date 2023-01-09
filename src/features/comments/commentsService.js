import axios from "axios";

const API_URL = "http://localhost:8080";

const getComments = async (id) => {

    const res = await axios.get(API_URL + "comments/findcomments/id/" + id);

    return res.data;

};

const createComment = async (id) => {

    const res = await axios.post(API_URL + "comments/create/"+ id + "/comment");

    return res.data;

};


const commentsService = {

    getComments

};

export default commentsService;