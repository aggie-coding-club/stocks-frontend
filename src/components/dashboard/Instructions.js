import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const rootStyle = {
  padding: '35vh 0 12vh 0',
}

const containerStyle = {
  float: 'right',
  textAlign: 'center',
  display: 'inline'
}
export default function Instructions() {
  return(
    <div style={rootStyle}>
      <div style={containerStyle}>
        <h3>Add your stocks from the search bar</h3>
        <h3>Toggle some stocks to graph them </h3>
      </div>

    </div>
  )
}