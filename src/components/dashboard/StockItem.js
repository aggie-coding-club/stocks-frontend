import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Switch from '@material-ui/core/Switch';
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

export default function StockItem({stock, delStock, cardToggle}) {
  const classes = useStyles();

  function getTitle(title) {
    if (title) {
      if (title.length <= 23) {
        return title
      } else {
        return title.substring(0, 20) + "..."
      }
    }
    return "none found";
  }

  function onToggleChange(event) {
    const isSelected = event.target.checked;
    cardToggle(stock.symbol, isSelected);
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        title={stock.symbol}
        subheader={getTitle(stock.title)}
        action={
          <>
            <Switch onChange={onToggleChange}/>
            <IconButton
              onClick={delStock.bind(this, stock.id, stock.symbol)}
              className={classes.delete}
              aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </>
        }
      />
      <CardContent>
        <Typography>
          Price: {stock.price ? stock.price : "none found"}
        </Typography>
      </CardContent>
    </Card>
  );
}
