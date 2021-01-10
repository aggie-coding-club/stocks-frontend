import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Chip from '@material-ui/core/Chip';
import { Box, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const stockData = require('../../data/stock_data.json')

const useStyles = makeStyles((theme) => ({
  layout: {
    position: "fixed",
    left: "50%",
    transform: 'translate(-50%, -50%)', 
  },
  inputRoot: {
    color: "inherit",
      "& .MuiFilledInput-underline:after": {
        color: 'inherit'
      },
      
      "& .MuiFormLabel-root": {
        color: 'inherit'
      },

      "& .MuiFormLabel-root.Mui-focused": {
        color: 'inherit'
      },
    },

    root: {
      display: "inline-block",
      verticalAlign: "middle",
      width: "70vw",
      maxWidth: 500,
      fullWidth: true,
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
}));

export default function SearchBar() {
  const classes = useStyles();
  
  return (
    <div className={classes.search, classes.inputRoot, classes.layout}>
      <Box
        display="flex"
        flexWrap = "nowrap"
        alignItems="center"
        p={1}
        m={1}
        cdd={{maxWidth: 600}}
      >
        <Box p={1}>
          <Autocomplete
          id="search-bar"
          size="small"
          classes={classes}
          options={stockData["data"]}
          getOptionLabel={(option) => option.security + ' (' + option.symbol + ')'}
          onChange={(event, value) => console.log(value)}
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
        </Box>
        <Box p={1}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<AddIcon />}
          >
            Add
          </Button>
        </Box>
      </Box>
    </div>
  );
}