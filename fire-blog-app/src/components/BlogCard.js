import * as React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
} from "@mui/material/";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import moment from "moment";
import { useNavigate } from "react-router-dom";

export default function BlogCard({ item }) {
  const navigate = useNavigate();
  // console.log("BlogCard.js running");

  const handleClick = () => {
    navigate("/details", { state: { item } });
  };

  return (
    <Card sx={{ maxWidth: 345 }} style={{boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px", margin:"20px"}}>
      <CardMedia
        onClick={handleClick}
        style={{ height: "17rem", width: "17rem" }}
        component="img"
        image={item.url}
        alt="Paella dish"
      />

      <CardContent onClick={handleClick} >
        <Typography>
          {item.title}
        </Typography>
        <Typography >
          {moment(item?.addDate).format("MM/DD/YYYY")}
        </Typography>
        <Typography >
          {item?.content.substring(0, 200)}
        </Typography>

        <Typography >
          {item.user}
        </Typography>
      </CardContent>

      <CardActions >
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>

        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
