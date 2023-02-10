import React from 'react'
import PostAuthor from "./PostAuthor";
import ReactionButton from "./ReactionButton";
import TimeAgo from "./TimeAgo";


const PostExpert = ({ post }) => {
  return (
    <div className="col-md-6">
      <section>
        <h3>{post.title}</h3>
        <p>{post.body.substring(0, 100)}</p>
        <p className="postCredit">
          <PostAuthor userId={post.userId} />
          <TimeAgo timestamp={post.date} />
          <ReactionButton post={post} />
        </p>
      </section>
    </div>
  )
}

export default PostExpert