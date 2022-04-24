import { Box, Container, Typography } from "@mui/material";
import React, { useContext } from "react";
import BlogCard from "../components/BlogCard";
import { BlogContext } from "../contexts/BlogContext";

const Dashboard = () => {

  const { useFetch, blog} = useContext(BlogContext);
  useFetch();

  return (
    <Container>

      <Typography
        gutterBottom
        variant="h3"
        component="div"
        sx={{ fontFamily: "Girassol", textAlign: "center", color: "#046582" }}
      >
        ──── Dashboard ────
      </Typography>

      <Box
        xs={{ d: "flex" }}
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
        flexWrap="wrap"
      >
        {
        blog.map((item) => (
          <BlogCard item={item} key={item.id} />
        ))
        }
      </Box>
      
    </Container>
  );
};
export default Dashboard;
