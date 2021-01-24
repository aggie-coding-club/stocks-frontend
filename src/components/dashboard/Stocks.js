import React from 'react';
import StockItem from './StockItem';


export default function Stocks({stocks, delStock, cardToggle}) {
  return(
    <div>
      { stocks.map((stock) => (
        <StockItem key={stock.id} stock={stock} delStock={delStock} cardToggle={cardToggle}/>
      ))
      }
    </div>
  );
}
