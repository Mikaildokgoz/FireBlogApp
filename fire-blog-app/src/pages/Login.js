import React, { useContext, useState } from "react";
import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper,
  Button,
} from "@material-ui/core";
import blok from "../assets/blok.png";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { login, loginWithGoogle } = useContext(AuthContext);

  const handleLogin = () => {
    login(email, password,navigate)
    //   .then(() => {
    //     navigate("/");
    //     // toastSuccessNotify("Logged in successfully!");
    //   })
    //   .catch((error) => {
    //     // toastErrorNotify(error);
    //   });
    // // resetForm();
  };

  const handleGoogle = () => {
    loginWithGoogle(navigate);
  };

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
          <h2>--LOGIN--</h2>
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
            <Button fullWidth onClick={handleLogin}>
              {" "}
              Login{" "}
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth onClick={handleGoogle}>
              {" "}
              Continue With Google{" "}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Login;
