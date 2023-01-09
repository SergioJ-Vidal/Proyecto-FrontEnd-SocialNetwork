import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import { useState } from "react";
import logo from "../../assets/images/logo.png"
import { Menu } from "antd";
import { UserOutlined } from "@ant-design/icons"
import "./Header.css"

import Login from "../Login/Login";
import Register from "../Register/Register";


const Header = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);


    const [text, setText] = useState("");
    const handleChange = (e) => {
        setText(e.target.value);
        if (e.key === "Enter") {
            navigate('/search/' + text)
        }
    };


    const onLogout = (e) => {

        e.preventDefault();

        dispatch(logout());

        navigate("/login");

    };

    return (

        <div className="header-container">

            <nav className="nav-main">

                <div className="nav-container">
                    <div className='make-box'>
                        <a href="http://localhost:3000/" rel="noopener noreferrer" title="main">
                            <img src={logo} className="logo" alt="logo"></img></a>
                    </div>

                    <input onKeyUp={handleChange} placeholder="search post" name="text" />

                    <div>

                        {user ? <>

                            <span><Link to="/" onClick={onLogout}>Logout</Link></span>

                            <span><Link to="/profile" >Profile</Link> </span>

                        </>

                            :

                            <>

                                <Login />

                                <span><Link to="/register">Register</Link></span>

                            </>

                        }

                    </div>

                </div>

            </nav>

        </div>

    );

};

export default Header;