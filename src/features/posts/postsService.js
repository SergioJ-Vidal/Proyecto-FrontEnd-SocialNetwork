import axios from "axios";

const API_URL = "http://localhost:3001";

const getAll = async () => {

const res = await axios.get(API_URL + "/posts/find");

return res.data;

};

const postsService = {

getAll

};

export default postsService;