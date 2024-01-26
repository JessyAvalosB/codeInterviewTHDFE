import { Box, CircularProgress, Container } from "@mui/material";

import useFetch from '../../hooks/useFetch';
import { BASE_URL_CARS } from "../../constants";
import CarTable from "../../components/CarTable/CarTable";

const CarsCatalog = () => {
    const { data, error, loading } = useFetch(BASE_URL_CARS);

    if (error) {
        console.log(error.message);
    }

    return (
        <Container component='main' maxWidth='md' >
            {loading && (
                <Box
                    sx={{
                        marginTop: 60,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}>
                    <CircularProgress />
                </Box>
            )}

            {data && (
                <CarTable cars={data} />
            )}

        </Container>
    )
}

export default CarsCatalog
