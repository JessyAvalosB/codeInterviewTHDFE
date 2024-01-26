import {
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Container
} from "@mui/material";

import AddCar from "../AddCar/AddCar";
import CarItem from "../CarItem/CarItem";
import { ICar } from "../../interfaces/Car";

const CarTable = ({ cars }: { cars: ICar[] }) => {
    return (
        <Container sx={{ display: 'flex', flexDirection: 'column', marginTop: 40 }} component='main' maxWidth='lg'>
            <AddCar />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Make</TableCell>
                            <TableCell align="right">Model</TableCell>
                            <TableCell align="right">Equipment</TableCell>
                            <TableCell align="right">Color</TableCell>
                            <TableCell align="right">Year</TableCell>
                            <TableCell align="right">Category</TableCell>
                            <TableCell align="right">Mileage</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cars.map((car: ICar) => (
                            <CarItem key={car._id} {...car} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default CarTable
