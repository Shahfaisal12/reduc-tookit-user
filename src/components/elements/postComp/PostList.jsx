import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllPost,
  getPostStatus,
  getPostError,
  fetchPosts,
} from "../../../pages/store/postSlice/PostSlice";
import AddPost from "./AddPost";
import { useEffect } from "react";
import PostExpert from "./PostExpert";

const PostList = () => {
  const dispatch = useDispatch();

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

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);
  return (
    <div className="Post-section py-5">
      <div className="container">
        <AddPost />
        <div className="row py-5">
          <h2>Post Section</h2>
          {content}
        </div>
      </div>
    </div>
  );
};

export default PostList;
