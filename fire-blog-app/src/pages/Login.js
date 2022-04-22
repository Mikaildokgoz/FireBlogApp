import React from 'react';
import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper,
  Button
} from '@material-ui/core';
import blok from '../assets/blok.png'

const Login = () => {




  return (
    <div style={{ padding: 30 }}>
      <Paper>
        <div style={{display:'flex', justifyContent: 'center'}} >
          <img src={blok} alt="" style={{borderRadius:'%50', border:'1px solid aqua', backgroundColor:'aqua'}} />
        </div>
        <Grid
          container
          spacing={3}
          direction={'column'}
          justify={'center'}
          alignItems={'center'}
        >
          <h2>--LOGIN--</h2>
          <Grid item xs={12}>
            <TextField label="Email"></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Password" type={'password'}></TextField>
          </Grid>
          <Grid item xs={12}>

          </Grid>
          <Grid item xs={12}>
            <Button fullWidth> Login </Button>
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth> Continue With Google </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Login;
