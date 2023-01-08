import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createPost } from "../../../features/posts/postsSlice";
import "./Publish.css"

const Publish = () => {
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

            <input name="title" placeholder="add title" />
            <textarea className="textarea" name="body"></textarea>

            <button>
                <input className="input" type="submit" value="Publish" />
            </button>
        </form>
        
        </div>

    );

};

export default Publish;