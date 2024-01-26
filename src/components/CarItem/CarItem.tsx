import { Delete, Edit } from '@mui/icons-material';
import { IconButton, TableCell, TableRow } from "@mui/material"
import { ICar } from "../../interfaces/Car"

const CarItem = ({ make, model, equipment, color, year, category, mileage, price }: ICar) => {
    return (
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">{make}</TableCell>
            <TableCell align="right">{model}</TableCell>
            <TableCell align="right">{equipment}</TableCell>
            <TableCell align="right">{color}</TableCell>
            <TableCell align="right">{year}</TableCell>
            <TableCell align="right">{category}</TableCell>
            <TableCell align="right">{mileage}</TableCell>
            <TableCell align="right">{price}</TableCell>
            <TableCell align="right">
                <IconButton aria-label="edit">
                    <Edit />
                </IconButton>
                <IconButton aria-label="delete">
                    <Delete />
                </IconButton>
            </TableCell>
        </TableRow>
    )
}

export default CarItem;
