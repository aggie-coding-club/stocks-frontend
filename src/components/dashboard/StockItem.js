import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    float: 'left',
    margin: '2.5vh'
  },
  title: {
    fontSize: 14,
    whiteSpace: 'nowrap'
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
    margin: '1vh'
  },
  pos: {
    marginBottom: 12,
  }
});

export default function StockItem({stock, delStock}) {
  const classes = useStyles();

  return(
    <Card className={classes.root}>
      <CardHeader
        title = {stock.symbol}
        subheader= {stock.title ? stock.title : 'None found'}
        action={
          <IconButton
            onClick={delStock.bind(this, stock.id)}
            className={classes.delete}
            aria-label="delete">
            <DeleteIcon />
          </IconButton>
        }
      />
      <CardContent>
        <Typography>
          Price: {stock.price ? stock.price : "none found"}
        </Typography>
      </CardContent>

    </Card>
  )
}