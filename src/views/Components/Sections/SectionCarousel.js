import React from 'react';
// react component for creating beautiful carousel
import Carousel from 'react-slick';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

// @material-ui/icons
import LocationOn from '@material-ui/icons/LocationOn';
// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Card from 'components/Card/Card.js';
import Testimonials from './TestimonialsList.js';

import image from 'assets/img/faces/avatar.jpg';
import image1 from 'assets/img/bg.jpg';
import image2 from 'assets/img/bg2.jpg';
import image3 from 'assets/img/bg3.jpg';

import styles from 'assets/jss/material-kit-react/views/componentsSections/carouselStyle.js';
import imgStyles from 'assets/jss/material-kit-react/views/componentsSections/typographyStyle.js';
import './SectionCarousel.scss';
const useStyles = makeStyles(styles);
const useImgStyles = makeStyles(imgStyles);

export default function SectionCarousel() {
  const classes = useStyles();
  const imgClasses = useImgStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings} className={classes.bgCol}>
                {Testimonials.map(item => {
                  return (
                    <Box display='flex' flexDirection='row' p={5}>
                      {/* <img src={image1} alt="First slide" className="slick-image" /> */}
                      <Box p={1} m={2}>
                        <img
                          id='test-image'
                          style={{
                            width: '50%',
                            height: 'auto',
                            position: 'relative',
                            left: '50%',
                            right: '50%',
                            transform: 'translateX(-50%)',
                            borderRadius: '100%'
                          }}
                          src={item.img}
                          alt='...'
                          className={
                            classes.imgRoundedCircle + ' ' + classes.imgFluid
                          }
                        />
                      </Box>
                      <Box p={1} m={1}>
                        {/* <div className={classes.nameWithSt} id='nameWithSt'>
                          <h3 className={classes.testimonial} id='name'>
                            {item.test}
                          </h3>
                          <h4 className={classes.name} id='test'>
                            <em>{item.who}</em>
                          </h4>
                        </div> */}
                        <div className={classes.nameWithSt}>
                          <h3 c lassName={classes.name}>
                            {item.who}
                          </h3>
                          <h4>
                            <em>{item.what}</em>
                          </h4>
                          <h3 className={classes.testimonial} id='quotation'>
                            {item.test}
                          </h3>
                        </div>
                      </Box>
                    </Box>
                  );
                })}
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
