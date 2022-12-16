import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../features/auth/authSlice";
import { notification } from "antd";

const Register = () => {
    const dispatch = useDispatch()
    const { isSuccess, message } = useSelector((state) => state.auth);

    useEffect(() => {

        if (isSuccess) {

            notification.success({

                message: "Success",

                description: message,

            });

        }

    }, [isSuccess]);
    const onSubmit = (event) => {

        event.preventDefault();

        const formData = new FormData();
        if (event.target.image.files[0]) formData.set('image', event.target.image.files[0]);
        formData.set('name', event.target.name.value)
        formData.set('email', event.target.email.value)
        formData.set('password', event.target.password.value)
        formData.set('age', event.target.age.value)

        dispatch(register(formData))
    };

    return (

        <form onSubmit={onSubmit}>

            <input name="name" placeholder="add name" />
            <input name="email" placeholder="add email" />
            <input type="file" name="image" id="file" className="input-file" />
            <input type="number" name="age" placeholder="add age" />
            <input type="password" name="password" placeholder="password" />

            <button>
                <input className="input" type="submit" value="Register" />
            </button>
        </form>

    );

};

export default Register;