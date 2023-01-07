import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { update } from "../../../../features/posts/postsSlice";

const Edit = () => {
    const dispatch = useDispatch()

    const { id } = useParams();

    const onSubmit = (event) => {

        event.preventDefault();

        const formData = new FormData(event.target);

        const postCreated = Object.fromEntries(formData.entries());

        dispatch(update(id, postCreated))

    };

    return (

        <form onSubmit={onSubmit}>

            <input name="title" placeholder="add title" />
            <textarea className="textarea" name="body"></textarea>

            <button>
                <input className="input" type="submit" value="Edit" />
            </button>
        </form>

    );

};

export default Edit;