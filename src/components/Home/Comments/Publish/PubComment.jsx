import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Input } from 'antd';
import { updateThread } from "../../../../features/posts/postsSlice";


const createCommentById = () => {

    const { TextArea } = Input;

    // const dispatch = useDispatch()

    // const { id } = useParams();

    const onSubmit = (event) => {

        event.preventDefault();

        const formData = new FormData(event.target);

        const postCreated = Object.fromEntries(formData.entries());

        console.log(postCreated)

        // const test = {id, postCreated}

        console.log(test)

        // dispatch(updateThread(test))

    };

    return (

        <div className="form-container">

        <form onSubmit={onSubmit} className="form-send">

            <span className="form-header">Crear comentario</span>

            <Input name="title" placeholder="Título"  />
            
            <TextArea rows={4} className="textarea" name="body" resize="none" />

            <input className="input-create" type="submit" value="Publicar" />
            
        </form>
        </div>

    );

};

export default createCommentById;