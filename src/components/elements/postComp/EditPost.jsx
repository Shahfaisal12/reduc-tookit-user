import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import {
    selectPostById,
    updatePost,
    deletePost
} from "../../../pages/store/postSlice/PostSlice";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { selectAllUserPost } from "../../../pages/store/postSlice/PostUserSlice";

const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
        color: "green",
    },
    "& .MuiInput-underline:after": {
        borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "#f1f1f1",
        },
        "&:hover fieldset": {
            borderColor: "#1565C0",
        },
        "&.Mui-focused fieldset": {
            borderColor: "green",
        },
    },
});

const EditPost = () => {
    const { postId } = useParams()
    const navigate = useNavigate()

    const post = useSelector((state) => selectPostById(state, Number(postId)));
    const usersData = useSelector(selectAllUserPost)

    const dispatch = useDispatch();

    const [title, setTitle] = useState(post?.title);
    const [content, setContent] = useState(post?.body);
    const [userId, setUserId] = useState(post?.userId);
    const [addRequestStatus, setAddRequestStatus] = useState("idle");


    if (!post) {
        return (
            <section>
                <h2>Post Not Found!</h2>
            </section>
        )
    }

    const canSave =
        [title, content, userId].every(Boolean) && addRequestStatus === "idle";

    const onSavePostClick = () => {
        if (canSave) {
            try {
                setAddRequestStatus("pending");
                dispatch(updatePost({ id: post.id, title, body: content, userId, reactions: post.reactions })).unwrap(); //useId is comming from userPostSlice
                setTitle("");
                setContent("");
                setUserId("");
                navigate(`/post/post/${postId}`)
            } catch (err) {
                console.error("Failed to Save the post", err);
            } finally {
                setAddRequestStatus("idle");
            }
        }
    };

    const onDeletePostClick = () => {
            try {
                setAddRequestStatus("pending");
                dispatch(deletePost({ id: post.id })).unwrap(); //useId is comming from userPostSlice
                setTitle("");
                setContent("");
                setUserId("");
                navigate(`/post`)
            } catch (err) {
                console.error("Failed to delete the post", err);
            } finally {
                setAddRequestStatus("idle");
            }
    };


    // const userOptions = usersData.map(user => (
    //     <option key={user.id} value={user.id} >{user.name}</option>
    // ))

    return (
        <div className="EditPost-section py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <h2 className="mb-5">Edit Post</h2>
                    <div className="col-md-6">
                        <Box
                            component="form"
                            sx={{ "& > :not(style)": { m: 2 } }}
                            noValidate
                            autoComplete="off"
                        >
                            <div>
                                <CssTextField
                                    InputLabelProps={{ style: { color: "#FFF" } }}
                                    id="postTitle"
                                    label="Title"
                                    value={title}
                                    type="text"
                                    name="postTitle"
                                    onChange={(e) => setTitle(e.target.value)}
                                    variant="outlined"
                                    fullWidth
                                />
                            </div>
                            <div>
                                <CssTextField
                                    InputLabelProps={{ style: { color: "#FFF" } }}
                                    fullWidth
                                    id="postAuthor"
                                    onChange={(e) => setUserId(e.target.value)}
                                    select
                                    defaultValue={userId}
                                    label="Select User"
                                >
                                    {usersData.map((option) => (
                                        <MenuItem key={option.id} value={option.id}>
                                            {option.name}
                                        </MenuItem>
                                    ))}
                                </CssTextField>
                            </div>
                            <div>
                                <CssTextField
                                    id="postContent"
                                    label="Content"
                                    type="text"
                                    multiline
                                    value={content}
                                    rows={4}
                                    onChange={(e) => setContent(e.target.value)}
                                    fullWidth
                                    name="postContent"
                                    InputLabelProps={{ style: { color: "#FFF" } }}
                                />
                            </div>
                            <div className="text-center">
                                <Button
                                    disabled={!canSave}
                                    variant="contained"
                                    onClick={onSavePostClick}
                                    sx={{
                                        "&.Mui-disabled": {
                                            background: "#c1c1c1",
                                            color: "#000000",
                                            margin: "5px 0 0 0",
                                            width: "180px",
                                        },
                                    }}
                                >
                                    {canSave ? "Submit Post" : "Disabled"}
                                </Button>
                                <Button
                                type="button"
                                    variant="contained"
                                    onClick={onDeletePostClick}
                                    sx={{
                                        marginLeft:'10px',
                                        marginTop:'5px'
                                    }}
                                >
                                    DeletePost
                                </Button>
                            </div>
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditPost;
