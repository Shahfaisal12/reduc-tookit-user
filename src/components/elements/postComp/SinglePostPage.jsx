import React from "react";
import PostAuthor from "./PostAuthor";
import ReactionButton from "./ReactionButton";
import TimeAgo from "./TimeAgo";
import { useSelector } from "react-redux";
import { selectPostById } from "../../../pages/store/postSlice/PostSlice";
import { Link, useParams } from "react-router-dom";

const SinglePostPage = () => {

    const { postId } = useParams()

    const post = useSelector((state) => selectPostById(state, Number(postId)));

    if (!post) {
        return (
            <section className="py-5">
                <h2>Post Not Found!</h2>
            </section>
        )
    }

    return (
        <div className="SinglePostPage mt-5 py-5 ">
            <div className="container">
                <h3>Post Details</h3>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <section className="d-flex flex-column justify-content-between">
                            <h4>{post.title}</h4>
                            <div>
                                <p>{post.body.substring(0, 100)}</p>
                                <p className="postCredit" style={{ fontSize: "11px" }}>
                                    <Link className="text-white mx-2" to={`/post/edit/${post.id}`}>Edit Post</Link>
                                    <PostAuthor userId={post.userId} />
                                    <TimeAgo timestamp={post.date} />
                                </p>
                            </div>
                            <ReactionButton post={post} />
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePostPage;
