import ReactDOM from 'react-dom/client';
import { Slide, ThemeProvider } from '@mui/material';
import { SnackbarProvider } from 'notistack';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './index.css';

import App from './App.tsx';
import { theme } from './themes/defaultTheme.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme} >
    <SnackbarProvider
      anchorOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      TransitionComponent={Slide}
      maxSnack={3}
    >

      <App />
    </SnackbarProvider>
  </ThemeProvider>
)
