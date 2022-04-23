import { Box, Container, Typography } from "@mui/material";
import React, { useContext } from "react";
import BlogCard from "../components/BlogCard";
import { BlogContext } from "../contexts/BlogContext";

const Dashboard = () => {
  const { useFetch, blog } = useContext(BlogContext);
  useFetch();
  console.log(blog);
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
        {blog?.map((item, index) => return ({
          <BlogCard item={item} key={index} />;
        }))}
      </Box>
    </Container>
  );
};
export default Dashboard;
