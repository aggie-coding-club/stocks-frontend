import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

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
  pos: {
    marginBottom: 12,
  },
  delete: {
    marginLeft: "auto"
  }
});

export default function StockItem({stock, delStock}) {
  const classes = useStyles();

  return(
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {stock.title}
        </Typography>
        <Typography variant="body2" component="p">
          {stock.price}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Tooltip title="Delete">
          <IconButton
            onClick={delStock.bind(this, stock.id)}
            className={classes.delete}
            aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  )
}