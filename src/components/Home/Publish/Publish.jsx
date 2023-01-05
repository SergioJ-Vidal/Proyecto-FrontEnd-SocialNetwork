import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../../features/posts/postsSlice";

const Publish = () => {
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth);
    console.log(user)

    const token = user.token

    console.log(token)

    const onSubmit = (event) => {
     
        event.preventDefault();

        const formData = new FormData();
        if (event.target.image.files[0]) formData.set('image', event.target.image.files[0]);
        formData.set('title', event.target.title.value)
        formData.set('body', event.target.body.value)

        dispatch(createPost(formData))
    };

    return (

        <form onSubmit={onSubmit}>

            <input name="title" placeholder="add title" />
            <input name="body" placeholder="add body" />
            <input type="file" name="image" id="file" className="input-file" />
            <textarea className="textarea"></textarea>

            <button>
                <input className="input" type="submit" value="Publish" />
            </button>
        </form>

    );

};

export default Publish;