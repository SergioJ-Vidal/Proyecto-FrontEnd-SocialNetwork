import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../../assets/images/mail.png"
import bubble from "../../assets/images/bubble.png"
import "./Post.css"

const Post = () => {

    const { posts } = useSelector((state) => state.posts);

    console.log(posts)

    const post = posts.map((post) => {

        const name = ((post || {}).userId || {}).name;

        const comments = ((post || {})).comments;

        return (

            <div className="post" key={post._id}>

                <div className="icon">
                <img src={logo} className="logo" alt="mailpost"></img>
                </div>

                <div className="post-details">
                <Link to={"/post/" + post._id}>

                    <p className="post-title">{post.title}</p>

                </Link>

                
                    <span className="nickname">{name}</span>
                </div>

                <div className="commentaries">
                <img src={bubble} className="logo" alt="bubble"></img>
                <span>{comments.length}</span>
                </div>    

            </div>
        );

    });

    return <div className="main-post">
        <div className="posts-header">Hilos</div>
        <div className="post-map">{post}</div>
        </div>
};

export default Post;