import Landing from "./components/Landing"
import './App.css';
import AppBar from './components/dashboard/AppBar';
import SearchBar from './components/dashboard/SearchBar';
import Stocks from './components/dashboard/Stocks';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import React, { useState } from 'react';
import stockData from './data/stock_data2.json'
import {SatelliteTwoTone} from "@material-ui/icons";
;


function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [darkState, setDarkState] = useState(true);
  const [stocks, setStocks] = useState(stockData.stocks)

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

  function addStock(title) {
    //add stock from search bar
    //FIXME: should provide necessary information of stock here to pop up on card
    let data = {title: title, id: Math.random()}
    setStocks([...stocks, data])
  }

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
          <AppBar addStock={addStock}/>
          <Stocks stocks={stocks} delStock={delStock}/>
        </div>
      </ThemeProvider>

    </div>

  );
}

export default App;
