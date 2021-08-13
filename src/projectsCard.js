import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          <h5 >Project:<span style={{fontFamily: "'Noto Sans JP', sans-serif"}}>{"       " + props.name}</span></h5>
          </Typography>
          <Typography variant="body2" component="p">
            <h5>Country:<span style={{fontFamily: "'Noto Sans JP', sans-serif"}}>{"       " + props.country}</span></h5>
            <h5>StartDate:<span style={{fontFamily: "'Noto Sans JP', sans-serif"}}>{"       " + props.country}</span></h5>
            <h5>EndDate:<span style={{fontFamily: "'Noto Sans JP', sans-serif"}}>{"       " + props.country}</span></h5>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" >
          <a href = {props.link1} target = "_blank">link1</a>
        </Button>
        <Button size="small" color="primary">
         <a href = {props.link1}>link2</a>
        </Button>
      </CardActions>
    </Card>
  );
}
