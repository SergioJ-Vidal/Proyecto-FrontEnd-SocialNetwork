import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../../features/posts/postsSlice";

const Publish = () => {
    const dispatch = useDispatch()

    const onSubmit = (event) => {

        event.preventDefault();

        const formData = new FormData(event.target);

        const postCreated = Object.fromEntries(formData.entries());

        dispatch(createPost(postCreated))
    };

    return (

        <form onSubmit={onSubmit}>

            <input name="title" placeholder="add title" />
            <textarea className="textarea" name="body"></textarea>

            <button>
                <input className="input" type="submit" value="Publish" />
            </button>
        </form>

    );

};

export default Publish;