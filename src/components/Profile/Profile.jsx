import React from "react";
import { useSelector } from "react-redux";
import "./Profile.css"

const Profile = () => {

    const { user } = useSelector((state) => state.auth);

    console.log (user)

    return (

        <div className="profile">

            <div className="profile-info">
            <h1>Profile</h1>

            <p>{user.user.name}</p>

            <p>{user.user.email}</p>
            </div>
            <div className="user-posts">
                
            </div>

        </div>

        
    );

};

export default Profile;