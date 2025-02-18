import { ThemeSettings } from './theme/Theme';
import router from './routes/Router';
import { RouterProvider } from 'react-router';
import { CssBaseline, ThemeProvider } from '@mui/material';


function App() {
  const theme = ThemeSettings();


  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
