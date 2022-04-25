import { Box, Container, Typography } from "@mui/material";
import React, { useContext } from "react";
import BlogCard from "../components/BlogCard";
import { BlogContext } from "../contexts/BlogContext";
import loadingImg from "../assets/spinner.gif"
const Dashboard = () => {
  const { useFetch, blog, loading } = useContext(BlogContext);
  useFetch();

  return (
    {loading ? (<Container>
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
        {blog?.map((item) => (
          <BlogCard item={item} key={item.id} />
        ))}
      </Box>
    </Container>) : (<div>loadingImg</div>)}

      
  );
};
export default Dashboard;
