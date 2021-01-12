import Landing from "./components/Landing"
import './App.css';
import AppBar from './components/dashboard/AppBar';
import SearchBar from './components/dashboard/SearchBar';
import Stocks from './components/dashboard/Stocks';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import React, { useState } from 'react';
import {SatelliteTwoTone} from "@material-ui/icons";
;


function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [darkState, setDarkState] = useState(true);
  const [stocks, setStocks] = useState([
    {
      id: 1,
      title: 'AAA',
      price: '$3.00',
    },
    {
      id: 2,
      title: 'USAA',
      price: '$100.00',
    },
    {
      id: 3,
      title: 'Tesla',
      price: '$30.25',
    },
    {
      id: 4,
      title: 'Warner Bros',
      price: '$14.91',
    },
    {
      id: 5,
      title: 'Blackberry',
      price: '$55.01',
    },
    {
      id: 6,
      title: 'General Motors',
      price: '$6.22',
    }
  ])

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

  function delStock(id) {
    //stock card deleted from dashboard
    //FIXME: Should be deleted in server
    setStocks(stocks.filter(stock => stock.id !== id))
  }
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <AppBar/>
          <Stocks stocks={stocks} delStock={delStock}/>
        </div>
      </ThemeProvider>

    </div>

  );
}

export default App;
