import Box from "@mui/material/Box";  
import TextField from "@mui/material/TextField";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { BlogContext } from "../contexts/BlogContext";
import { useLocation, useNavigate } from "react-router-dom";
import { successToastNotify } from "../helpers/toastNotify";
import { Avatar,Typography, Grid, Button} from "@mui/material";
import blogPng from '../assets/blok.png'

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
    EditBlog(posts);
    navigate("/");
    successToastNotify('Blog updated successfully')
  };

  return (
    // <form action="" style={{ margin: "auto" }}>
    //   <div>
    //     <img src={blok} alt="" />
    //   </div>
    //   <div style={{ margin: "10px" }}>
    //     <TextField
    //       onChange={handleChange}
    //       name="title"
    //       value={posts.title}
    //       id="outlined-basic"
    //       label="Title"
    //       variant="outlined"
    //     />
    //   </div>
    //   <div style={{ margin: "10px" }}>
    //     <TextField
    //       onChange={handleChange}
    //       name="url"
    //       value={posts.url}
    //       id="outlined-basic"
    //       label="İmgUrl"
    //       variant="outlined"
    //     />
    //   </div>
    //   <div style={{ margin: "10px" }}>
    //     <TextField
    //       onChange={handleChange}
    //       name="content"
    //       value={posts.content}
    //       id="outlined-basic"
    //       label="Context"
    //       variant="outlined"
    //     />
    //   </div>
    //   <div style={{ margin: "10px" }}>
    //     <button onClick={handleSubmitUpdate} >
    //       Update BLOG
    //     </button>
    //   </div>
    // </form>













    <div
    style={{
      padding: 30,
      backgroundImage: "url(https://picsum.photos/1600/900)",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "calc(100vh - 64px)",
      display: "flex",
      justifyContent: "center",
    }}
  >
    <Box
      style={{
        width: "50%",
        borderRadius: "10px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        backgroundColor: "transparent",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center", flexDirection:'column', alignItems:'center' }}>
        <Avatar
          alt="avatar_img"
          src={blogPng}
          sx={{ width: 156, height: 156 }}
          style={{ display: "flex", justifyContent: "center" }}
        />
        <Typography
          variant="h4"
          component="h1"
          sx={{ m: 4, fontFamily: "Girassol", color: "#046582" }}
        >
          ── UPDATE BLOG ──
        </Typography>
      </div>

      <form onSubmit={handleSubmitUpdate}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <TextField
              id="title"
              label="Title"
              name="title"
              variant="outlined"
              type="text"
              autoFocus
              autoComplete="title"
              required
              value={posts.title}
              onChange={handleChange}
              fullWidth
              style={{backgroundColor:'#FFF',borderRadius:'5px'}}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="url"
              label="Image URL"
              name="url"
              variant="outlined"
              type="text"
              autoComplete="image-url"
              required
              value={posts.url}
              onChange={handleChange}
              fullWidth
              style={{backgroundColor:'#FFF',borderRadius:'5px'}}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="content"
              label="Content"
              name="content"
              multiline
              variant="outlined"
              type="text"
              rows={7}
              autoFocus
              autoComplete="content"
              required
              value={posts.content}
              onChange={handleChange}
              fullWidth
              style={{backgroundColor:'#FFF',borderRadius:'5px'}}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              style={{ backgroundColor: "#046582", fontWeight: 700 }}
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
            >
              Update Blog
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  </div>
  );
}


