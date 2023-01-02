import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getById } from "../../../../features/posts/postsSlice";
import "./PostDetail.css"

const PostDetail = () => {

    const { id } = useParams();

    const dispatch = useDispatch();

    const { post } = useSelector((state) => state.posts);

    useEffect(() => {

        dispatch(getById(id));

    }, []);

    const CommentsPost = () => {


    }

    return (

        <div className="post-detail-box">

            <div className="post-detail">

                <h1>{post.title}</h1>

                <p>{post.body}</p>

            </div>

            <div className="post-details">
                <button onClick={CommentsPost()}>Like</button>
                <button onClick={CommentsPost()}>Show Comments</button>
            </div>

        </div>

    );

};

export default PostDetail;