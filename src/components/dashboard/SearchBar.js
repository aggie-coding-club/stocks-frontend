import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Chip from '@material-ui/core/Chip';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';

const stockData = require('../../data/stock_data.json')

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& .MuiFilledInput-underline:after" : {
      borderBottomColor: "inherit"
    },
    "& .MuiInputLabel-root.Mui-focused" : {
      color: "inherit"
    },
    "& .MuiFormLabel-root" : {
      color: "inherit"
    },
    "& .MuiFormControl-root" : {
      verticalAlign: "middle"
    }
  },
}));

export default function SearchBar({addStock}) {
  const classes = useStyles();
  const [title, setTitle] = useState(null)

  function onChange(event, value) {
    if(value) {
      setTitle([value.security, value.symbol]);
    } else {
      setTitle(null)
    }
  }

  function onAdd() {
    if(title) {
      console.log('adding')
      addStock(title)
    }
  }
  
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        alignContent="center"
        spacing={2}
        fullWidth={true}
        wrap="nowrap"

      >
        <Grid item xs={12}>
          <Autocomplete
            id="search-bar"
            size="small"
            className={classes}
            options={stockData["data"]}
            getOptionLabel={(option) => option.security + ' (' + option.symbol + ')'}
            onChange={onChange}
            style={{ width: '50vw', maxWidth: '500px' }}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  variant="outlined"
                  label={option.security}
                  size="small"
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={(params) => (
              <TextField {...params} variant="filled" label="Enter a security or symbol" placeholder="Tesla, Inc. (TSLA)" />
            )}
          />
        </Grid>
        <Grid item xs>
          <Button
              onClick={onAdd}
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<AddIcon />}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}