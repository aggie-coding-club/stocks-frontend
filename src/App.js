import Landing from "./components/Landing"
import './App.css';
import AppBar from './components/dashboard/AppBar';
import SearchBar from './components/dashboard/SearchBar';
import Stocks from './components/dashboard/Stocks';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import React, {useState} from 'react';
// TODO(nhwn): replace hardcoded data imports with calls to the backend
import stockData from './data/stock_data2.json'
import sampleGraphData from './data/graph_sample_data.json'
import {SatelliteTwoTone} from "@material-ui/icons";
import Graph from "./components/dashboard/Graph";


function App() {
  const [darkState, setDarkState] = useState(false);
  const [stocks, setStocks] = useState(stockData.stocks);
  const [graphData, setGraphData] = useState(sampleGraphData);

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

  function delStock(id) {
    //stock card deleted from dashboard
    //FIXME: Should be deleted in server
    setStocks(stocks.filter(stock => stock.id !== id))
  }

  function cardClick(title) {
    //console logs title of card that was clicked
    console.log(title)
  }
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <AppBar addStock={addStock} toggleDarkMode={toggleDarkMode}/>
          <Graph data={graphData} />
          <Stocks stocks={stocks} delStock={delStock} cardClick={cardClick}/>
        </div>
      </ThemeProvider>

    </div>

  );
}

export default App;
