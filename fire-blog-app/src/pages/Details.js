import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { BlogContext } from "../contexts/BlogContext";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "@mui/material";
import { AuthContext } from "../contexts/AuthContext";
import { successToastNotify } from "../helpers/toastNotify";

const Details = () => {
  const { DeleteBlog } = useContext(BlogContext);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const location = useLocation();
  /*  console.log('location->>',location);
  console.log('location.state->>',location.state);
  console.log('location.state.item->>',location.state.item);
  console.log('location.state.item.id->>',location.state.item.id);
  console.log('currentUser.email->>',currentUser.email); */

  const item = location.state.item;

  const handleNavigateUpdate = (id) => {
    navigate("/updateblog", { state: { item } });
  };

  const handleDelete = (id) => {
    DeleteBlog(id);
    navigate("/");
    successToastNotify("blog suggesfully deleted");
  };

  return (
    <div style={{height:'100vh',width:'100vw', background: 'rgb(2,0,36)',
    background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(80,129,104,0.25253851540616246) 61%, rgba(0,212,255,1) 100%)', display:'flex',alignItems:'center',justifyContent:'center'}}>
    <Container style={{backgroundColor:'#FAFDD6'}}>
      <Card>
        <CardMedia
          style={{ height: "17rem", width: "17rem" }}
          component="img"
          image={item.url}
          alt="Paella dish"
        />

        <CardContent>
          <Typography>{item.title}</Typography>
          <Typography>{moment(item?.addDate).format("MM/DD/YYYY")}</Typography>
          <Typography style={{fontFamily:'Lato'}}>{item?.content}</Typography>

          <Typography style={{color:'#FFD93D',fontFamily:'Times News Roman'}} >{item.user}</Typography>
        </CardContent>

        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>

          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>

<div style={{display:'flex', justifyContent:'space-evenly',margin:'20px'}}>
{currentUser?.email === item?.user ? (
          <Button style={{backgroundColor:'#446A46', color:'#FFF'}} onClick={() => handleDelete(item.id)}>Delete</Button>
        ) : null}
        {currentUser?.email === item?.user ? (
          <Button style={{backgroundColor:'#B20600', color:'#FFF'}} onClick={() => handleNavigateUpdate(item.id)}>Edit</Button>
        ) : null}
</div>

    </Container></div>
  );
};

export default Details;
