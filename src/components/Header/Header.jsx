import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import { Button } from 'antd';
import Login from "../Login/Login";
import logo from "../../assets/images/forum-logo.png"
import "./Header.scss"

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

        navigate("/");

    };


    return (

        <div className="header-container">

            <nav className="nav-main">

                <div className="nav-container">
                    <div className='make-box'>
                        <a href="http://localhost:3000/" rel="noopener noreferrer" title="main">
                            <img src={logo} className="logo" alt="logo"></img></a>
                    </div>

                    <div class="form__group field">
                        <input onKeyUp={handleChange} type="input" class="form__field" placeholder="Search" name="text" />
                        <label for="name" class="form__label">Buscar hilos</label>
                    </div>



                    <div className="header-options">

                        {user ? <>

                            <div className="avatar-div">
                                <a href="http://localhost:3000/profile" rel="noopener noreferrer" title="facebook">
                                    <Button className="span-profile">Perfil</Button></a>
                            </div>

                            <Button className="span-logout"><Link to="/" onClick={onLogout}>Logout</Link></Button>


                        </>

                            :

                            <>

                                <Login />

                                <Button><Link to="/register">Registrase</Link></Button>

                            </>

                        }

                    </div>

                </div>

            </nav>

        </div>

    );

};

export default Header;