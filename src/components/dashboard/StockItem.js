import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles( (theme) => ({
  paper: {
    padding: theme.spacing(3),
    marginTop: '20px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

}))
export default function StockItem({stock}) {
  const classes = useStyles();
  return(
    <div>
      <Paper className={classes.paper}>{stock.title}</Paper>
    </div>
  )
}