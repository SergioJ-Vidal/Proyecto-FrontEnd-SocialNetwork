import React, { useEffect } from 'react'
import Post from '../../Post/Post'
import { useDispatch, useSelector } from "react-redux";
import { getAll, reset } from "../../../features/posts/postsSlice";
import "./Posts.css"

const Posts = () => {
    const { isLoading } = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const getAllAndReset = async () => {

        await dispatch(getAll());

        dispatch(reset());
    }
    useEffect( () => {
        getAllAndReset()

    }, []);

    if (isLoading) {

        return <h1>Cargando posts...</h1>;

    }

    return (

        <div className='body-post'>

            <h1>Posts</h1>

            <Post />

        </div>

    )

}

export default Posts