import React, { useContext, useState } from "react";
import {
  Checkbox,
  Grid,
  TextField,
  Container,
  Box,
  FormControlLabel,
  Paper,
  Button,
} from "@material-ui/core";
import blok from "../assets/blok.png";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { errorToastNotify, successToastNotify } from "../helpers/toastNotify";
import google from "../assets/google.png";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { login, loginWithGoogle } = useContext(AuthContext);

  const handleLogin = () => {
    login(email, password, navigate)
      .then(() => {
        navigate("/");
        successToastNotify("Logged in successfully!");
      })
      .catch((error) => {
        errorToastNotify(error.message);
      });
  };

  const handleGoogle = () => {
    loginWithGoogle(navigate);
  };

  return(
  <div
  style={{
    padding: 30,
    backgroundImage: "url(https://picsum.photos/1600/900)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "calc(100vh - 64px)",
  }}
>
  <Container
    style={{
      width: "50%",
      borderRadius: "10px",
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      backgroundColor: "transparent",
    }}
  >
    <Box>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={blok}
          alt=""
          style={{
            width: "12rem",
            borderRadius: "50%",
            border: "1px solid #046582",
            backgroundColor: "#046582",
          }}
        />
      </div>
      <Grid
        container
        spacing={3}
        direction={"column"}
        justify={"center"}
        alignItems={"center"}
      >
        <h2 style={{ fontFamily: "Girassol" }}>LOGIN</h2>
        <Grid item xs={12}>
          <TextField
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Password"
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}>
          <Button
            fullWidth
            onClick={handleLogin}
            style={{ backgroundColor: "#046582", color: "white" }}
          >
            {" "}
            Login{" "}
          </Button>
        </Grid>
        <Grid item xs={12} style={{ display: "flex" }}>
          <Button
            fullWidth
            onClick={handleGoogle}
            style={{ color: "white", opacity: "1" }}
          >
            {" "}
            Continue With{" "}
            <span>
              <img
                style={{
                  width: "3rem",
                  height: "2rem",
                  backgroundColor: "",
                }}
                src={google}
                alt=""
              />
            </span>
          </Button>
        </Grid>
      </Grid>
    </Box>
  </Container>
</div>
)
};

export default Login;
