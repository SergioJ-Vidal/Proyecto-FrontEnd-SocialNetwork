import axios from "axios";

const API_URL = "http://localhost:8080";

const user = JSON.parse(localStorage.getItem("user"));

const getAll = async () => {

    const res = await axios.get(API_URL + "/posts/find?limit=20&page=1");

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
    
    const res = await axios.post(API_URL + "/posts/create",postData,{

        headers: {
    
            authorization: user.token,
    
        },
    
        
    })

return res.data;
 

};

const deletePost = async (id) => {

    const res = await axios.delete(API_URL + "/posts/delete/id/" + id, {

        headers: {
    
            authorization: user.token,
    
        },
    
        
    });

    return res.data;

};

const updatePost = async (test) => {
    
    const res = await axios.put(API_URL + "/posts/update/" + test.id, test.postCreated, {

        headers: {
    
            authorization: user.token,
    
        },
    
    });
    console.log(res.data)
    return res.data;

};

const likePost = async (id) => {

    const res = await axios.put(API_URL + "/posts/givelike/" + id, {},  {

        headers: {
    
            authorization: user.token,
    
        },
         
    });

    return res.data;

};

const postsService = {

    getAll,
    getById,
    getPostByName,
    getComments,
    create,
    deletePost,
    updatePost,
    likePost

};

export default postsService;