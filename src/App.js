import Landing from "./components/Landing"
import './App.css';
import AppBar from './components/dashboard/AppBar';
import SearchBar from './components/dashboard/SearchBar';
import Stocks from './components/dashboard/Stocks';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import React, {useState} from 'react';
// TODO(nhwn): replace hardcoded data imports with calls to the backed
import stockData from './data/stock_data2.json'
import sampleGraphData from './data/graph_sample_data.json'
import {SatelliteTwoTone} from "@material-ui/icons";
import Graph from "./components/dashboard/Graph";
import Toolbar from "@material-ui/core/Toolbar";


function App() {
  const [darkState, setDarkState] = useState(false);
  const [stocks, setStocks] = useState(stockData.stocks);
  const [graphData, setGraphData] = useState(sampleGraphData);
  const [selectedSymbols, setSelectedSymbols] = useState({});
  const actualGraphData = Object.entries(selectedSymbols)
    .filter(([_, isSelected]) => isSelected)
    .map(([symbol, _]) => ({id: symbol, data: graphData[symbol].data}));

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: darkState ? 'dark' : 'light',
        },
      }),
    [darkState],
  );
  
  function toggleDarkMode() {
    setDarkState(!darkState);
  }

  function addStock(title) {
    //add stock from search bar
    //FIXME: should provide necessary information of stock here to pop up on card
    let data = {title: title[0], symbol:title[1], id: Math.random()} // FIXME: Need to change this so its not a math.random
    setStocks([...stocks, data])
  }

  function delStock(id, symbol) {
    //stock card deleted from dashboard
    //FIXME: Should be deleted in server
    setStocks(stocks.filter(stock => stock.id !== id))
    // NOTE: we need to ensure that the symbol is removed on deletion in case
    // the card is still toggled on
    selectedSymbols[symbol] = false;
    setSelectedSymbols({...selectedSymbols});
  }

  function cardToggle(symbol, isSelected) {
    selectedSymbols[symbol] = isSelected;
    setSelectedSymbols({...selectedSymbols});
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <AppBar addStock={addStock} toggleDarkMode={toggleDarkMode}/>
          <Toolbar />
          <Graph data={actualGraphData} />
          <Stocks stocks={stocks} delStock={delStock} cardToggle={cardToggle}/>
        </div>
      </ThemeProvider>

    </div>

  );
}

export default App;
