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
import AccountBoxIcon from "@mui/icons-material/AccountBox";

export default function BlogCard({ item }) {
  const navigate = useNavigate();
  // console.log("BlogCard.js running");

  const handleClick = () => {
    navigate("/details", { state: { item } });
  };

  return (
    <Card
      style={{
        display: "flex",
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        margin: "20px",
        cursor: "crosshair",
      }}
    >
      <CardMedia
        onClick={handleClick}
        style={{
          width: "15rem",
          padding: "10px",
          display: "flex",
          textAlign: "center",
        }}
        component="img"
        image={item.url}
        alt="Paella dish"
      />

      <CardContent onClick={handleClick} style={{ backgroundColor: "#E7E6F5" }}>
        <Typography
          style={{
            fontFamily: "Girassol",
            fontSize: "24px",
            textAlign: "center",
          }}
        >
          {item.title}
        </Typography>
        <Typography>{moment(item?.addDate).format("MM/DD/YYYY")}</Typography>
        <Typography>{item?.content.substring(0, 200)}</Typography>
      </CardContent>

      <div style={{width:'50%', display:'flex', flexDirection:'column',padding:'20px'}}>
        <Typography style={{ display: "flex", padding: "10px", justifyContent:'center', alignItems:'center',textAlign:'center',margin:'auto' }}>
          {" "}
          <AccountBoxIcon
            style={{ color: "red", marginRight: "10px", textAlign: "center" }}
          />{" "}
          {item.user}
        </Typography>

        <CardActions>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>

          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </div>
    </Card>
  );
}
