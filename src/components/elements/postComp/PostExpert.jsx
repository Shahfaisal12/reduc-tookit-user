import React from "react";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";
import ReactionButton from "./ReactionButton";
import TimeAgo from "./TimeAgo";


const PostExpert = ({ post }) => {
  return (
    <div className="col-md-4">
      <section className="d-flex flex-column justify-content-between" style={{ minHeight: "300px" }}>
        <h4>{post.title}</h4>
        <div>
          <p>{post.body.substring(0, 70)}...</p>
          <p className="postCredit" style={{ fontSize: "11px" }}>
          <Link className="text-white mx-2" to={`post/${post.id}`}>View Post</Link>
            <PostAuthor userId={post.userId} />
            <TimeAgo timestamp={post.date} />
          </p>
        </div>
        <ReactionButton post={post} />
      </section>
    </div>
  );
};

export default PostExpert;
