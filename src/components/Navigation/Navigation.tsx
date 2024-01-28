import { useEffect, useState } from "react";
import { useSnackbar } from 'notistack';
import { useNavigate } from "react-router-dom"
import { Box, Button, Menu, MenuItem } from "@mui/material";

import { getProfile, logout } from '../../services/auth';

const Navigation = () => {

    const [name, setName] = useState("");
    const [processing, setProcessing] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        getProfile().then(user => {
            if (user) {
                setName(user.displayName);
            }
        });
    }, []);

    const handleLogout = async () => {
        setProcessing(true);
        try {
            const {status, message, delay} = await logout();
            setProcessing(false);
            handleClose();
            if (status) {
                navigate(`/signIn`);
                enqueueSnackbar(message, { variant: "success", autoHideDuration: delay });
            } else {
                enqueueSnackbar(message, { variant: "error", autoHideDuration: delay });
            }
        }
        catch (e) {
            setProcessing(false);
            enqueueSnackbar("Something went wrong.", { variant: "error", autoHideDuration: 3000 });
        }
    }

    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box component='nav' sx={{
            maxHeight: 32,
            height: '100%',
            py: 1,
            px: 2,
            display: 'flex',
            justifyContent: 'end'
        }}>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                {name}
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleLogout} color="error" disabled={processing}>{processing ? "Processing...." : "Logout"}</MenuItem>
            </Menu>
        </Box>
    )
}

export default Navigation
