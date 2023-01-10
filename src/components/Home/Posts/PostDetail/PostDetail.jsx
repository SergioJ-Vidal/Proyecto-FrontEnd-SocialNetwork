import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getById, deletePost, likePosts } from "../../../../features/posts/postsSlice";
import { Button } from 'antd';
import { LikeOutlined, EditOutlined, DeleteOutlined, CommentOutlined } from "@ant-design/icons";
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

            <div className="comments-containery">
                <div className="comment" key={comment.id}>
                    <div className="comments-userinfo">
                        <img src={avatarComment} className="user-imgPost" alt="userimg"></img>
                        <span className="nickname-posts">{name}</span>
                    </div>
                    <div className="comments-body">
                        <p className="comment-title">{comment.body}</p>
                    </div>
                </div>
            </div>
        );

    });

    const removePost = () => { dispatch(deletePost(id)) }
    const giveLike = () => { dispatch(likePosts(id)) }

    return (

        <div className="post-detail-box">

            <h1 className="post-titles-header">{post.title}</h1>

            <div className="post-detail">
                <div className="user-details">
                    <img src={imageUrl} className="user-imgPost" alt="userimg"></img>
                    <Link to="/profile"><p className="nick-creator">{name}</p></Link>
                </div>

                <div className="body-postDetail">
                    <p className="post-body-p">{post.body}</p>
                </div>
                <div className="button-details">

                    <Link to={"/"}><Button onClick={removePost} icon={<DeleteOutlined />}>Remove</Button></Link>
                    <Link to={"/commentPost/" + id}><Button icon={<CommentOutlined />}>Comentar</Button></Link>
                    <Button onClick={giveLike} icon={<LikeOutlined />}>Dar Like</Button>
                    <Link to={"/updatePost/" + id}><Button icon={<EditOutlined />}>Update</Button></Link>

                </div>
            </div>

            <div className="comments">
                {comment}
            </div>


        </div>

    );

};

export default PostDetail;
