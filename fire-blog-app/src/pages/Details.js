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
    navigate("/updateblog", { state: { item } })
  };

  const handleDelete = (id,navigate) => {
    DeleteBlog(id,navigate);
    // navigate("/");
    // successToastNotify('blog suggesfully deleted')
  };

  return (
    <Container>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        style={{ height: "17rem", width: "17rem" }}
        component="img"
        image={item.url}
        alt="Paella dish"
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {moment(item?.addDate).format("MM/DD/YYYY")}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item?.content.substring(0, 200)}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {item.user}
        </Typography>
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

    {currentUser?.email === item?.user ? (
      <Button onClick={() => handleDelete(item.id)}>Delete</Button>
    ) : null}
    {currentUser?.email === item?.user ? (
      <Button onClick={() => handleNavigateUpdate(item.id)}>Edit</Button>
    ) : null}
  </Container>
  )
    };
  

export default Details;
