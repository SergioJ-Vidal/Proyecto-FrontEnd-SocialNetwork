import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { Input } from 'antd';
import { updateThread } from "../../../../features/posts/postsSlice";
import "./Edit.scss"

const Edit = () => {
    const { TextArea } = Input;

    const dispatch = useDispatch()

    const { id } = useParams();

    const { post } = useSelector((state) => state.posts);

    const onSubmit = (event) => {

        event.preventDefault();

        const formData = new FormData(event.target);

        const postCreated = Object.fromEntries(formData.entries());

        console.log(postCreated)

        const test = {id, postCreated}

        console.log(test)

        dispatch(updateThread(test))

    };

    return (

        <div className="form-container">

        <form onSubmit={onSubmit} className="form-send">

            <span className="form-header">Editar tema</span>

            <Input name="title" placeholder="Título"  />
            
            <TextArea rows={4} className="textarea" name="body" resize="none" />

            <input className="input-create" type="submit" value="Publicar" />
            
        </form>
        </div>

    );

};

export default Edit;