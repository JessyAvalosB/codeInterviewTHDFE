import { useState } from 'react'
import { Add } from '@mui/icons-material';
import {
    Modal,
    Box,
    Typography,
    Button,
    TextField,
    CircularProgress
} from '@mui/material';

import { ADD_CAR } from '../../constants';
import { ICar } from '../../interfaces/Car';
import useFetchPost from '../../hooks/useFetchPost';



const AddCar = () => {
    const [newData, setNewData] = useState<ICar>();
    const [open, setOpen] = useState(false);
    const { response, loading, error } = useFetchPost(ADD_CAR, newData);

    console.log(response);

    if (error) {
        console.log(error)
    }

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 350,
        bgcolor: 'background.paper',
        p: 4,
    };

    const handleSubmit = (event: { preventDefault: () => void; currentTarget: HTMLFormElement | undefined; }) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const newCar: ICar = {
            make: data.get('make'),
            model: data.get('model'),
            equipment: data.get('equipment'),
            color: data.get('color'),
            year: data.get('year'),
            category: data.get('category'),
            mileage: data.get('mileage'),
            price: data.get('price'),
        }
        setNewData(newCar);
    };

    return (
        <>
            <Button sx={{ ml: 'auto', mb: 2 }} onClick={handleOpen} variant="contained" endIcon={<Add />}>
                Add Car
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {loading && (
                        <CircularProgress sx={{ mx: 'auto' }} />
                    )}
                    {!loading && (
                        <>
                            <Typography id="modal-modal-title" variant="h5">
                                Add New Car
                            </Typography>
                            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="make"
                                    label="Make"
                                    name="make"
                                    autoFocus
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="model"
                                    label="Model"
                                    id="model"
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="equipment"
                                    label="Equipment"
                                    name="equipment"
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="color"
                                    label="Color"
                                    id="color"
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="year"
                                    label="Year"
                                    name="year"
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="category"
                                    label="Category"
                                    id="category"
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="mileage"
                                    label="Mileage"
                                    name="mileage"
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="price"
                                    label="Price"
                                    id="price"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Add Car
                                </Button>
                            </Box>
                        </>
                    )}
                </Box>
            </Modal>
        </>
    )
}

export default AddCar
