import { Box, Container, Typography } from "@mui/material";
import React, { useContext } from "react";
import BlogCard from "../components/BlogCard";
import { BlogContext } from "../contexts/BlogContext";
import loadingImg from "../assets/spinner.gif";
const Dashboard = () => {
  const { useFetch } = useContext(BlogContext);
  const { blog, loading } = useFetch();
  console.log(loading);

  return (
    <div>
      {loading ? (
       <Container>
          <Typography
            gutterBottom
            variant="h3"
            component="div"
            sx={{
              fontFamily: "Girassol",
              textAlign: "center",
              color: "#046582",
              
            }}
          >
            ──── Dashboard ────
          </Typography>
          <Box
            display="flex"
            flexWrap="wrap"
          >
            {blog?.map((item) => ( 
              <BlogCard item={item} key={item.id} />
            ))}
          </Box>
        </Container>
      ) : (
        <div style={{ display: "flex", justifyContent: "center", marginTop:'150px' }}>
        <img src={loadingImg} alt="" />
      </div>
      )}
    </div>
  );
};
export default Dashboard;
