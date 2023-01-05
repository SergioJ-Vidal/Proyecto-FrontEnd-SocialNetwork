import React from "react";
import { useSelector } from "react-redux";
import "./Profile.css"

const Profile = () => {

    const { user } = useSelector((state) => state.auth);

    console.log (user)

    return (

        <div className="profile">

            <h1>Profile</h1>

            <p>{user.user.name}</p>

            <p>{user.user.email}</p>

        </div>

    );

};

// export default Profile;

// const Profile = () => {
//     const dispatch = useDispatch()
//     dispatch(profile())
    
//     const { user } = useSelector((state) => state.auth);

//     return (

//         <div>

//             <h1>Profile</h1>

//             <p>{user.message}</p>

//             <p>{user.email}</p>

//         </div>


//     );

// };

export default Profile;