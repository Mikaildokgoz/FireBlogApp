import Box from "@mui/material/Box";  
import TextField from "@mui/material/TextField";
import { useContext, useState } from "react";
import blok from "../assets/blok.png";
import { AuthContext } from "../contexts/AuthContext";
import { BlogContext } from "../contexts/BlogContext";
import { useLocation, useNavigate } from "react-router-dom";
import { successToastNotify } from "../helpers/toastNotify";

export default function NewBlog() {
  const { EditBlog } = useContext(BlogContext);
  const {currentUser} = useContext(AuthContext)
  const navigate = useNavigate();


  
  const location = useLocation();
  const item = location.state.item

  const [posts, setPosts] = useState({
    id: item.id,
    title: item.title,
    url: item.url,
    content: item.content,
    user: currentUser.email,
    addDate: new Date(),
    likeCount: 0,
    commnetCount: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPosts({ ...posts, [name]: value });
  };

  const handleSubmitUpdate = (e) => {
    e.preventDefault(e);
    // setPosts({user: currentUser.email})
    EditBlog(posts);
    navigate("/");
    successToastNotify('Blog updated successfully')
  };

  return (
    <form action="" style={{ margin: "auto" }}>
      <div>
        <img src={blok} alt="" />
      </div>
      <div style={{ margin: "10px" }}>
        <TextField
          onChange={handleChange}
          name="title"
          value={posts.title}
          id="outlined-basic"
          label="Title"
          variant="outlined"
        />
      </div>
      <div style={{ margin: "10px" }}>
        <TextField
          onChange={handleChange}
          name="url"
          value={posts.url}
          id="outlined-basic"
          label="İmgUrl"
          variant="outlined"
        />
      </div>
      <div style={{ margin: "10px" }}>
        <TextField
          onChange={handleChange}
          name="content"
          value={posts.content}
          id="outlined-basic"
          label="Context"
          variant="outlined"
        />
      </div>
      <div style={{ margin: "10px" }}>
        <button onClick={handleSubmitUpdate} >
          Update BLOG
        </button>
      </div>
    </form>
  );
}


