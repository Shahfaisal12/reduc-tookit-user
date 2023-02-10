import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewPost } from "../../../pages/store/postSlice/PostSlice";
import { styled } from "@mui/material/styles";
import { selectAllUserPost } from "../../../pages/store/postSlice/PostUserSlice";
import MenuItem from "@mui/material/MenuItem";

const CssTextField = styled(TextField)({
  "& label": {
    color: "#FFF",
  },
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

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const usersData = useSelector(selectAllUserPost);

  const dispatch = useDispatch();

  const canSave =
    [title, content, userId].every(Boolean) && addRequestStatus === "idle";

  const onSavePostClick = () => {
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        dispatch(addNewPost({ title, body: content, userId })).unwrap(); //useId is comming from userPostSlice
        setTitle("");
        setContent("");
        setUserId("");
      } catch (err) {
        console.error("Failed to Save the post", err);
      } finally {
        setAddRequestStatus("idle");
      }
    }
  };

  return (
    <div className="AddPost-section py-5">
      <div className="container">
        <div className="row justify-content-center">
          <h2 className="mb-5">Add New Post</h2>
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
                  value={userId}
                  label="Select User"
                  defaultValue=""
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
              <Button
                disabled={!canSave}
                variant="contained"
                onClick={onSavePostClick}
                sx={{
                  "&.Mui-disabled": {
                    background: "#c1c1c1",
                    color: "#000000",
                  },
                }}
              >
                {canSave ? "Submit Post" : "Disabled"}
              </Button>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
