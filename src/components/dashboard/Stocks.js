import React from 'react';
import StockItem from './StockItem';

function getStocks({stocks}) {
  return (
    stocks.map((stock => (
      <StockItem stock={stock}/>
    )))
  )
}



export default function Stocks({stocks}) {
  return(
    <div >
      <div>
          {getStocks({stocks})}
      </div>
    </div>

  )
}