import {createRoot} from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider, StyledEngineProvider} from '@mui/material/styles';
import App from './App';
import theme from './theme';

const container = document.getElementById('root');
const root = createRoot(container as Element);
root.render(
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StyledEngineProvider>
);
