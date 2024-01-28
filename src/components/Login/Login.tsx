/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  Link,
  InputAdornment,
  IconButton
} from "@mui/material";
import { useState } from 'react';
import { useSnackbar } from 'notistack';
import { useNavigate } from "react-router-dom";
import { AccountCircle, Visibility, VisibilityOff } from '@mui/icons-material';

import { login } from '../../services/auth';

const Login = () => {
  const [processing, setProcessing] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState<boolean>(false);

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (event: { preventDefault: () => void; currentTarget: HTMLFormElement | undefined; }) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const user = {
      email: formData.get("email")?.toString(),
      password: formData.get("password")?.toString(),
    }

    if (user.email && user.password) {
      setProcessing(true);

      try {
        const { status, message, delay } = await login(user.email, user.password);
        setProcessing(false);
        if (status) {
          navigate(`/`);
          enqueueSnackbar(message, { variant: "success", autoHideDuration: delay });
        } else {
          enqueueSnackbar(message, { variant: "error", autoHideDuration: delay });
        }
      }
      catch (e) {
        console.log("e", e);
        setProcessing(false);
        enqueueSnackbar("Something went wrong.", { variant: "error", autoHideDuration: 3000 });
      }
    } else {
      enqueueSnackbar("All fields are required.", { variant: "error", autoHideDuration: 3000 });
    }
  };

  return (
    <Grid sx={{ mt: 10 }} container className="page-container">
      <Grid item md={4} sm={6} xs={11} className="page-block">
        <AccountCircle fontSize="large" />
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={passwordVisibility ? "text" : "password"}
            id="password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end"
                    onClick={() => setPasswordVisibility(!passwordVisibility)} >
                    {passwordVisibility ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={processing}
            sx={{ mt: 3, mb: 2 }}
          >
            {processing ? "Processing..." : "Sign In"}
          </Button>
          <Grid container justifyContent='end'>
            <Grid item>
              <Link href="/signUp" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Login
