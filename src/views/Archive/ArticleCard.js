import React from 'react';
// material-ui components
import { makeStyles } from '@material-ui/core/styles';
// core components
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import Button from 'components/CustomButtons/Button.js';
import { withRouter } from 'react-router-dom'
import imagesStyles from 'assets/jss/material-kit-react/imagesStyles.js';

import { cardTitle } from 'assets/jss/material-kit-react.js';

import './ArticleCard.scss';

const styles = {
  ...imagesStyles,
  cardTitle
};

const useStyles = makeStyles(styles);

function Cards(props) {
  const classes = useStyles();
 
  function pushToReadingPage() {
    props.history.push({
      pathname: '/article/' + props.id,
    })
  }
  return (
    <Card
      style={{
        minHeight: 'min-content',
        width: '26em',
        margin: '0 5px 40px'
      }}
      className='card'
      id="article-card"
    >
      <a onClick={pushToReadingPage} target='_blank'>
        <img
          style={{
            height: '26em',
            width: '26em',
            display: 'block',
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
          }}
          className={classes.imgCardTop}
          src={props.img}
          alt='Card-img-cap'
          id="article-card-img"
        />
      </a>
      <CardBody style={{ position: 'relative' }}>
        <h3 className={classes.cardTitle} id='article-title'>
          <a onClick={pushToReadingPage} target='_blank'>
            Titanic (2000)
          </a>
        </h3>
        <h4 style={{ paddingBottom: '2em' }} id="article-desc">By Kaushik</h4>
        <div className='flex-cont'>
          <h5>IMDB: 10</h5>
          {/* <span className='author'>- {props.author}</span> */}
          {/* <div className='date-min-read'>
            <span>{props.date} &bull;</span>
            <span> {props.min} min read</span>
          </div> */}
        </div>
      </CardBody>
    </Card>
  );
}

export default withRouter(Cards)