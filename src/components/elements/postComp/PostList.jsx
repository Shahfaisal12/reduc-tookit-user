import React from "react";
import { useSelector } from "react-redux";
import {
  selectAllPost,
  getPostStatus,
  getPostError,
} from "../../../pages/store/postSlice/PostSlice";
import PostExpert from "./PostExpert";
import { Link } from "react-router-dom";

const PostList = () => {

  const posts = useSelector(selectAllPost);
  const postStatus = useSelector(getPostStatus);
  const error = useSelector(getPostError);

  let content;

  if (postStatus === "loading") {
    content = <p> 'Loading...'</p>;
  } else if (postStatus === "succeeded") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post) => (
      <PostExpert key={post.id} post={post} />
    ));
  } else if (postStatus === "failed") {
    content = <p>{error}</p>;
  }
  
  return (
    <div className="Post-section py-5">
      <div className="container">
       <div className="row">
      <div className="d-flex justify-content-end">
      <Link className="btn btn-custom" to='/addPost'>Create Post</Link>
      </div>
       </div>
        <div className="row py-5">
          <h2>Post Section</h2>
          {content}
        </div>
      </div>
    </div>
  );
};

export default PostList;