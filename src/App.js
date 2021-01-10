import Landing from "./components/Landing"
import './App.css';
import AppBar from './components/dashboard/AppBar';
import SearchBar from './components/dashboard/SearchBar';
import StockCards from './components/dashboard/StockCards';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import React, { useState } from 'react';
import {SatelliteTwoTone} from "@material-ui/icons";

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [darkState, setDarkState] = useState(true);
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          //type: darkState ? 'dark' : 'light'
        },
      }),
      [prefersDarkMode],
  );

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <AppBar />
        </div>

      </ThemeProvider>
      <StockCards />
    </div>

  );
}

export default App;
