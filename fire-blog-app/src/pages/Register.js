import React, { useState, useContext } from "react";
import {
  Grid,
  TextField,
  Paper,
  Button,
} from "@material-ui/core";
import blok from "../assets/blok.png";
import google from "../assets/google.png";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import {errorToastNotify, successToastNotify} from "../helpers/toastNotify"


const Register = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const {register, loginWithGoogle} = useContext(AuthContext)


  const handleSubmit = () => {
    register(email, password)
    .then(()=>{
      navigate("/")
      successToastNotify("Registered in successfully!")
    })
    .catch((error)=> {
      errorToastNotify(error.message)
    })   
  };

  const handleGoogle = (e) => {
    e.preventDefault();
    loginWithGoogle(navigate)
  }

  return (
    <div style={{ padding: 30 }}>
      <Paper>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={blok}
            alt=""
            style={{
              borderRadius: "%50",
              border: "1px solid aqua",
              backgroundColor: "aqua",
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
          <h2>--REGISTER--</h2>
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
            <Button fullWidth onClick={handleSubmit}>
              {" "}
              Register{" "}
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth onClick={handleGoogle}>
              {" "}
              Continue With <span><img style={{width:'3rem'}} src={google} alt="" /></span>
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Register;
