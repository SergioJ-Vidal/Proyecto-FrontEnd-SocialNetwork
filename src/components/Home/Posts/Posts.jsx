import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
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

           <div className='postie'> 
           
           <h1>Foro General</h1>
           
           <Link to="/createPost" ><button className='create-topic'>Crear Tema</button></Link>
           </div>

            <Post />

        </div>

    )

}

export default Posts