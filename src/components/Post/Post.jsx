import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Post.css"

const Post = () => {

    const { posts } = useSelector((state) => state.posts);

    const post = posts.map((post) => {

        const name = ((post || {}).userId || {}).name;

        return (

            <div className="post" key={post.id}>

                <Link to={"/post/" + post._id}>

                    <p className="post-title">{post.title}</p>

                </Link>
                
                    <span>{name}</span>

            </div>
        );

    });

    return <div className="main-post">{post}</div>;

};

export default Post;