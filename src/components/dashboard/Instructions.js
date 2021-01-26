import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const instrStyle = {
  margin: 'auto',
  textAlign: 'right',
  padding: '30vh 0 12vh 0',
}


export default function Instructions() {
  return(
    <div style={instrStyle}>
      <h3>Add your stocks from the search bar</h3>
      <h3>Toggle some stocks to graph them </h3>
    </div>
  )
}