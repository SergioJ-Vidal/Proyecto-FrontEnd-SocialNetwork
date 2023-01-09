import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../features/auth/authSlice";
import { Input, notification } from "antd";
import "./Register.scss"

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

        <div className="register-div">

        <form className="register-form" onSubmit={onSubmit}>

            <h1>Registra tu Usuario</h1>

            <Input name="name" placeholder="add name" />
            <Input name="email" placeholder="add email" />
            <Input type="number" name="age" placeholder="add age" />
            <Input type="password" name="password" placeholder="password" />
            <Input type="file" name="image" id="file" className="input-file" />

                <Input className="input" type="submit" value="Register" />

        </form>

        </div>

    );

};

export default Register;