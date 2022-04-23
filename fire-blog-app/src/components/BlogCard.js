import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import moment from 'moment';
import {useNavigate} from 'react-router-dom'


export default function BlogCard({item}) {
  const navigate = useNavigate()

  console.log("BlogCard.js running");

  const handleClick = (e) => {
    // const id = e.target.value
    // console.log(id);
    navigate("/details", { state: { item } })
  }

  return (
    <Card sx={{ maxWidth: 345 }}  >
      <CardMedia onClick={handleClick}
      style={{height:"17rem", width:"17rem"}}
        component="img"
      
        image={item.url}
        alt="Paella dish"
      />

      <CardContent onClick={handleClick} >
       
        <Typography variant="body2" color="text.secondary">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {moment(item?.addDate).format("MM/DD/YYYY")}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {item?.content.substring(0,200)}
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
  );
}
