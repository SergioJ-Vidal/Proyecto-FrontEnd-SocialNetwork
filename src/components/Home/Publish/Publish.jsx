import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Input } from 'antd';
import { createPost } from "../../../features/posts/postsSlice";
import "./Publish.css"

const Publish = () => {

    const { TextArea } = Input;

    const dispatch = useDispatch()

    const onSubmit = (event) => {

        event.preventDefault();

        const formData = new FormData(event.target);

        const postCreated = Object.fromEntries(formData.entries());

        dispatch(createPost(postCreated))
    };

    return (

        <div className="form-topic">


        <form onSubmit={onSubmit} className="form-send">

            <span className="form-header">Crear nuevo tema</span>

            <Input name="title" placeholder="Título" />
            
            <TextArea rows={4} className="textarea" name="body" resize="none"/>

            <input className="input-create" type="submit" value="Publicar" />
            
        </form>
        
        </div>

    );

};

export default Publish;