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

    return (

        <div className="post-detail-box">

            <div className="post-detail">

                <h1>{post.title}</h1>

                <p>{post.body}</p>

            </div>

            <div className="comments-details">

                <button>Like</button>
                <button>Show Comments</button>
            </div>

        </div>

    );

};

export default PostDetail;
