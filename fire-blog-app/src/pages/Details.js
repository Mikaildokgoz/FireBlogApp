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

const Details = () => {
  const { EditBlog, DeleteBlog } = useContext(BlogContext);
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
    // navigate('/updateblog')
    navigate("/updateblog", { state: { item } })
  };

  const handleDelete = (id) => {
    DeleteBlog(id);
    navigate("/");
  };

  return (

    </Container>
  );
};

export default Details;
