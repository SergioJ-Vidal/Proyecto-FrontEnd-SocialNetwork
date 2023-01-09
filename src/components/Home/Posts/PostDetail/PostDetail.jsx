import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getById, deletePost, likePosts } from "../../../../features/posts/postsSlice";
import { ShopFilled } from "@ant-design/icons";
import "./PostDetail.scss"

const PostDetail = () => {


    const { id } = useParams();
    const { post } = useSelector((state) => state.posts);
    const { user } = useSelector((state) => state.auth);
    const comments = post.comments
    const name = ((post || {}).userId || {}).name;
    const imagePost = ((post || {}).userId || {}).image;
    const imageUrl = "http://localhost:8080/images/users/" + imagePost;
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getById(id));

    }, []);

    const comment = comments?.map((comment) => {

        const name = ((comment || {}).userId || {}).name;
        const image = ((comment || {}).userId || {}).image;
        const avatarComment = "http://localhost:8080/images/users/" + image;

        return (

            <div className="comment" key={comment.id}>

                <img src={avatarComment} className="user-imgPost" alt="userimg"></img>
                <span>{name}</span>
                <p className="comment-title">{comment.title}</p>

            </div>
        );

    });

    const removePost = () => { dispatch(deletePost(id)) }
    const giveLike = () => { dispatch(likePosts(id)) }

    return (

        <div className="post-detail-box">

            <h1>{post.title}</h1>

            <div className="post-detail">
                <div className="user-details">
                    <img src={imageUrl} className="user-imgPost" alt="userimg"></img>
                    <p>{name}</p>
                </div>

                <div className="body-postDetail">
                    <p>{post.body}</p>
                </div>
            </div>

            <div className="button-details">

                <Link to={"/"}><button onClick={removePost}>Remove</button></Link>
                <Link to={"/commentPost/" + id}><button icon={<ShopFilled />}>Comentar</button></Link>
                <button onClick={giveLike}>Dar Like</button>
                <Link to={"/updatePost/" + id}><button icon={<ShopFilled />}>Update</button></Link>

            </div>

            <div className="comments">
                {comment}
            </div>
        </div>

    );

};

export default PostDetail;
