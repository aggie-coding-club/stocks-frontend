import React from 'react';
import StockItem from './StockItem';


const stockStyle = {
  float: 'right'
}

export default function Stocks({stocks, delStock, cardToggle}) {
  return(
    <div style={stockStyle}>
      { stocks.map((stock) => (
        <StockItem key={stock.id} stock={stock} delStock={delStock} cardToggle={cardToggle}/>
      ))
      }
    </div>
  );
}
