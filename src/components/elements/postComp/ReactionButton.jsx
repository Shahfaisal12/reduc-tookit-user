import { useDispatch } from "react-redux";
import { reactionAdded } from "../../../pages/store/postSlice/PostSlice";

const reactionEmoji = {
  thumbsUp: "👍",
  hooray: "🤟",
  heart: "💝",
  rocket: "🚀",
  eyes: "👀",
};

const ReactionButton = ({ post }) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="mt-3 btn bg-none border-0 text-white reactionButton"
        onClick={() =>
          dispatch(reactionAdded({ postId: post.id, reaction: name }))
        }
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });

  return <div> {reactionButtons} </div>;
};

export default ReactionButton;
