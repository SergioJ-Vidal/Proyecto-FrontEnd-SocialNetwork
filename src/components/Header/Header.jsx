import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import { useState } from "react";
import logo from "../../assets/images/logo.png"
import "./Header.css"


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
                        <a href="http://localhost:3002/" rel="noopener noreferrer" title="main">
                            <img src={logo} className="logo" alt="logo"></img></a>
                    </div>

                    <input onKeyUp={handleChange} placeholder="search post" name="text" />

                    <div>

                        {user ? <>

                            <span><Link to="/" onClick={onLogout}>Logout</Link></span>

                            <span><Link to="/profile" >{user.name}</Link> </span>

                        </>

                            :

                            <>

                                <span><Link to="/login">Login</Link></span>

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