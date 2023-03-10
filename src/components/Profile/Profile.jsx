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

    const imageUrl = "http://localhost:8080/images/users/" + user.user.image;

    return (

        <div className="profile-view">

            <div className="profile">

                <div className="profile-info">
                    <h1 className="profile-name">{user.user.name}</h1>

                    <img src={imageUrl} className="userimg" alt="userimg"></img>

                    <p>{user.user.email}</p>
                    <p>{user.user.age} Años</p>
                </div>
            </div>
            <div className="user-posts">
                <h2 className="own-posts">Tus Posts</h2>
                {postRender}
            </div>
        </div>


    );

};

export default Profile;