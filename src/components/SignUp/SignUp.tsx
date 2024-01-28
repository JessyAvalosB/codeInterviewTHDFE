import { useState } from "react";
import { useSnackbar } from 'notistack';
import { useNavigate } from "react-router-dom";
import {
    AccountCircle,
    Visibility,
    VisibilityOff
} from "@mui/icons-material";
import {
    Box,
    Typography,
    TextField,
    Button,
    Grid,
    Link,
    InputAdornment,
    IconButton
} from "@mui/material";

import { register } from '../../services/auth'

const SignUp = () => {
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const [processing, setProcessing] = useState(false);
    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const [passwordComfVisibility, setPasswordComfVisibility] = useState(false);

    const handleSubmit = async (event: { preventDefault: () => void; currentTarget: HTMLFormElement | undefined; }) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const user = {
            name: formData.get('name')?.toString(),
            email: formData.get("email")?.toString(),
            password: formData.get("password")?.toString(),
            passwordComfirmation: formData.get("passwordComfirmation")?.toString(),
        }

        if (user.name && user.email && user.password && user.passwordComfirmation) {
            if (user.password === user.passwordComfirmation) {
                setProcessing(true)
                try {
                    const { status, message, delay } = await register(user.name, user.email, user.password);
                    setProcessing(false);
                    if (status) {
                        navigate('/');
                        enqueueSnackbar(message, { variant: 'success', autoHideDuration: delay });
                    } else {
                        enqueueSnackbar(message, { variant: "error", autoHideDuration: delay });
                    }
                } catch (err) {
                    setProcessing(false);
                    enqueueSnackbar('Something went wrong.', { variant: 'error', autoHideDuration: 3000 });
                }
            } else {
                enqueueSnackbar("Password and Password Comfirmation doesn't match.", { variant: "error", autoHideDuration: 3000 });
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
                    Sign up
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoComplete="name"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
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
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="passwordComfirmation"
                        label="Comfirm Password"
                        type={passwordComfVisibility ? "text" : "password"}
                        name="passwordComfirmation"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton edge="end"
                                        onClick={() => setPasswordComfVisibility(!passwordComfVisibility)} >
                                        {passwordComfVisibility ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        {processing ? "Processing..." : "Sign Up"}
                    </Button>
                    <Grid container justifyContent='start'>
                        <Grid item>
                            <Link href="/signIn" variant="body2">
                                {"Already have an account? Sign In"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
}

export default SignUp;
