import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import stockGraph from '../../static/stock_graph.png'; //FIXME: delete once actual graph used

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
    paddingTop: '56.25%', // 16:9
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
      <CardHeader
        title = {stock.title}
        subheader= {stock.price}
      />
      {/*FIXME: Insert graph HERE*/}
      <CardMedia
        className={classes.media}
        title="Stock Graph"
        image={stockGraph}
      />
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