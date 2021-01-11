import React from 'react';
import StockItem from './StockItem';

export default function Stocks({stocks}) {
  return(
    stocks.map((stock => (
      <StockItem stock={stock}/>
    )))
  )
}