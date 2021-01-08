import React, { Component } from 'react'
import { Button } from '@material-ui/core'

class Landing extends Component {
render() {
  return (
    <div>
      <h1>Landing</h1>

      <Button variant="contained" color="primary"> Sign Up </Button>
      <Button variant="contained"> Login </Button>
  </div>


  )



}
}

export default Landing;