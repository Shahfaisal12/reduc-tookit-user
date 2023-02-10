import { useSelector } from "react-redux";
import { selectAllUserPost } from "../../../pages/store/postSlice/PostUserSlice";

const PostAuthor = ({userId}) => {
  const postDatausers = useSelector(selectAllUserPost);
  const author = postDatausers.find((user) => user.id === userId);

  return <span>by {author ? author.name : "Unknown Author"}</span>;
};

export default PostAuthor;
