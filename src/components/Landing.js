import React, { Component } from 'react'
import { Button } from '@material-ui/core'

class Landing extends Component {

render() {

  const headerStyle = {
    textAlign: 'center',
    padding: '33vh',
    backgroundColor: '#01013b',
    color: '#daefff'
  }

  const buttonStyle = {
    textAlign: 'center'
  }
  return (
    <div>
      <header style={headerStyle}>
        <h1>Landing</h1>
      </header>

      <div style={buttonStyle}>
        <Button variant="contained" color="primary"> Sign Up </Button>
        <Button variant="contained"> Login </Button>
      </div>

  </div>


  )



}
}

export default Landing;