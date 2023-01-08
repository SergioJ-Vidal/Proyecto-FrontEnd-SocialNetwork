import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getById, deletePost, likePosts } from "../../../../features/posts/postsSlice";
import "./PostDetail.css"

const PostDetail = () => {

    const { id } = useParams();
    useEffect(() => {

        dispatch(getById(id));

    }, []);
    const { post } = useSelector((state) => state.posts);
    const { user } = useSelector((state) => state.auth);

    const commentsArray = post.comments

    console.log(post)
    console.log(commentsArray)

    const dispatch = useDispatch();
    const removePost = () => { dispatch(deletePost(id)) }
    const giveLike = () => { dispatch(likePosts(id, user.user._id)) }


    // const comment = commentsArray.map((comment) => {

    //     const name = ((comment || {}).userId || {}).name;

    //     return (

    //         <div className="post" key={comment.id}>

    //             <Link to={"/post/" + comment._id}>

    //                 <p className="post-title">{comment.title}</p>

    //             </Link>

    //             <span>{name}</span>

    //         </div>
    //     );

    // });

    return (

        <div className="post-detail-box">

            <div className="post-detail">

                <h1>{post.title}</h1>

                <p>{post.body}</p>

            </div>

            <div className="comments-details">

                <Link to={"/"}><button onClick={removePost}>Remove</button></Link>

                <button onClick={giveLike}>Dar Like</button>

                <Link to={"/updatePost/" + id}><button>Update</button></Link>


            </div>

            <div className="comments">
               AQUI COMMENTS
            </div>
        </div>

    );

};

export default PostDetail;
