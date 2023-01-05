import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { create } from "../../../features/posts/postsService";
import { notification } from "antd";

const Publish = () => {
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
        formData.set('title', event.target.title.value)
        formData.set('body', event.target.body.value)

        // dispatch(create(formData))
    };

    return (

        <form onSubmit={onSubmit}>

            <input name="title" placeholder="add title" />
            <input name="body" placeholder="add body" />
            <input type="file" name="image" id="file" className="input-file" />

            <button>
                <input className="input" type="submit" value="Publish" />
            </button>
        </form>

    );

};

export default Publish;