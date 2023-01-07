import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getById, deletePost } from "../../../../features/posts/postsSlice";
import "./PostDetail.css"

const PostDetail = () => {

    const { id } = useParams();

    const dispatch = useDispatch();

    const { post } = useSelector((state) => state.posts);

    const removePost = () => {

        dispatch(deletePost(id));

    }

    useEffect(() => {

        dispatch(getById(id));

    }, []);

    return (

        <div className="post-detail-box">

            <div className="post-detail">

                <h1>{post.title}</h1>

                <p>{post.body}</p>

            </div>

            <div className="comments-details">

                <button onClick={removePost}>Remove</button>


                <Link to={"/updatePost/" + id}><button>Update</button></Link>
                
                <button>Show Comments</button>

            </div>

        </div>

    );

};

export default PostDetail;
