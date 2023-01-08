import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Profile.css"

const Profile = () => {

    const { user } = useSelector((state) => state.auth);

    console.log(user)

    const userPosts = user.user.posts

    const postRender = userPosts.map((post) => {

        const name = ((post || {}).userId || {}).name;

        return (

            <div className="postProfile" key={post.id}>

                <Link to={"/post/" + post._id}>

                    <p className="post-title">{post.title}</p>

                </Link>

            </div>
        );

    });

    return (

        <div className="profile-view">
        
        <div className="profile">

            <div className="profile-info">
            <h1>Profile</h1>

            <p>{user.user.name}</p>

            <p>{user.user.email}</p>
            </div>
            <div className="user-posts">
                Posts
                {postRender}
            </div>
            </div>
        </div>

        
    );

};

export default Profile;