import React from 'react'
import { Button } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';

function Landing() {

  const headerStyle = {
    textAlign: 'center',
    backgroundColor: 'white',

    padding: '15vh 0 12vh 0',
    boxShadow: '10px 1px 0.5rem rgba(0,0,0,0.5)',
    marginBottom: '15vh',

    //borderBottom: '1px solid black'
  }

  const titleStyle = {
    margin: '20px 25% 0 25%'
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
        <h3>The BeanStock</h3>
      </header>

      <div style={titleStyle}>
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