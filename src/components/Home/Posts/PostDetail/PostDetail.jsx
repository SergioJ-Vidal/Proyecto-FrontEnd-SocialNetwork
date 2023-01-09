import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getByPost } from "../../../../features/comments/commentsSlice";
import { getById, deletePost, likePosts } from "../../../../features/posts/postsSlice";
import "./PostDetail.css"

const PostDetail = () => {

    
    const { id } = useParams();
    const { post } = useSelector((state) => state.posts);
    const { user } = useSelector((state) => state.auth);
    const { postComments } = useSelector((state) =>state.comments);

    console.log(postComments)

    const dispatch = useDispatch();
    
    useEffect(() => {

        dispatch(getById(id));
        // dispatch(getByPost(id))

    }, []);

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
               {/* {comment} */}
            </div>
        </div>

    );

};

export default PostDetail;
