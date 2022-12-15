import React from "react";
import { useDispatch } from "react-redux";
import { register } from "../../features/auth/authSlice";

const Register = () => {
    const dispatch = useDispatch()
    const onSubmit = (event) => {

        event.preventDefault();
        
        const formData = new FormData();
        if (event.target.image.files[0]) formData.set('image', event.target.image.files[0]);
        formData.set('name', event.target.name.value)
        formData.set('email', event.target.email.value)
        formData.set('password', event.target.password.value)
        formData.set('age', event.target.age.value)
        console.log(formData)
        dispatch(register(formData))
    };

    return (

        <form onSubmit={onSubmit}>

            <input name="name" placeholder="add name" />
            <input name="email" placeholder="add email" />
            <input type="file" name="image" id="file" className="input-file" />
            <input type="number" name="age" placeholder="add age" />
            <input type="password" name="password" placeholder="password"/>

            <button>
                <input className="input" type="submit" value="Register" />
            </button>
        </form>

    );

};

export default Register;