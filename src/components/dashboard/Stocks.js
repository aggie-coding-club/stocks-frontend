import React from 'react';
import StockItem from './StockItem';
import Grid from "@material-ui/core/Grid";

function getStocks({stocks}) {
  return (
    stocks.map((stock => (
      <StockItem stock={stock}/>
    )))
  )
}

export default function Stocks({stocks}) {
  return(
    <div>
      <Grid container spacing={3}>
        {getStocks({stocks})}
      </Grid>

    </div>

  )
}