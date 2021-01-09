import React from 'react'
import { Button } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';

function Landing() {

  const headerStyle = {
    textAlign: 'center',
    fontSize: '3.5vw',
    padding: '25vh',
    backgroundColor: '#01013b',
    color: 'white'
  }

  const btnStyle = {
    width: '150px',
    padding: '20px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  }


  return (
    <div>
      <header style={headerStyle}>
        <h1>An Amazing Name</h1>
      </header>

      <div style={{marginRight: '25%', marginLeft: '25%', marginTop: '20px'}}>
        <div>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Button style={btnStyle} variant="contained" color="secondary">
                Sign up
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button style={btnStyle} variant="outlined" color="primary">
                Login
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default Landing;