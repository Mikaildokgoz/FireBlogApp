import Box from "@mui/material/Box";  
import TextField from "@mui/material/TextField";
import { useContext, useState } from "react";
import blok from "../assets/blok.png";
import { AuthContext } from "../contexts/AuthContext";
import { BlogContext } from "../contexts/BlogContext";
import { useNavigate } from "react-router-dom";

export default function NewBlog() {
  const { AddBlog } = useContext(BlogContext);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [title, setTitle] = useState();
  const [url, setUrl] = useState();
  const [content, setContent] = useState();
  const [posts, setPosts] = useState({
    title: "",
    url: "",
    content: "",
    user: currentUser.email,
    addDate: new Date(),
    likeCount: 0,
    commnetCount: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPosts({ ...posts, [name]: value });
    console.log(posts);
  };

  const handleSubmit = (e) => {
    e.preventDefault(e);
    AddBlog(posts);
    navigate("/");
    
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
        <button onClick={handleSubmit} >
          Add BLOG
        </button>
      </div>
    </form>
  );
}


