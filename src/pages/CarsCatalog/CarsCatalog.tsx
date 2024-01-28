import { Box, CircularProgress, Container } from "@mui/material";

import useFetch from '../../hooks/useFetch';
import { GET_CARS_LIST } from "../../constants";
import CarTable from "../../components/CarTable/CarTable";
import Navigation from "../../components/Navigation/Navigation";

const CarsCatalog = () => {
    const { data, error, loading } = useFetch(GET_CARS_LIST);

    if (error) {
        console.log(error.message);
    }

    return (
        <>
            <Navigation />
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
        </>
    )
}

export default CarsCatalog
