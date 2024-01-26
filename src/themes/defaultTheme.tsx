import { createTheme, ThemeOptions } from '@mui/material/styles';

export const theme: ThemeOptions = createTheme({
    palette: {
        primary: {
            main: '#242424',
            light: '#4F4F4F',
            dark: '#191919',
            contrastText: '#fff'
        },
        secondary: {
            main: '#e19311',
            light: '#E7A840',
            dark: '#9D660B',
            contrastText: '#000'
        },
    },
});
