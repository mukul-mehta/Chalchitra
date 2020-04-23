/*eslint-disable*/
import React from 'react';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// nodejs library that concatenates classes
import classNames from 'classnames';
// material-ui core components
import { List, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons
import Favorite from '@material-ui/icons/Favorite';

import styles from 'assets/jss/material-kit-react/components/footerStyle.js';

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses} style={{ backgroundColor: '#f2f2f2' }}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              {/* <a
                href="https://www.creative-tim.com/?ref=mkr-footer"
                className={classes.block}
                target="_blank"
              >
                Creative Tim
              </a> */}
              <a href='https://www.facebook.com/iit.tech.ambit/' target="_blank">
                <i class='fa fa-facebook-official fa-2x' aria-hidden='true'></i>
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              {/* <a
                href='https://www.creative-tim.com/presentation?ref=mkr-footer'
                className={classes.block}
                target='_blank'
              >
                About us
              </a> */}
              <a href='https://medium.com/iit-technology-ambit' target="_blank">
                <i class='fa fa-medium fa-2x' aria-hidden='true'></i>
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              {/* <a
                href='http://blog.creative-tim.com/?ref=mkr-footer'
                className={classes.block}
                target='_blank'
              >
                Blog
              </a> */}
              <a href='https://www.instagram.com/iit_techambit/' target="_blank">
                <i class='fa fa-instagram fa-2x' aria-hidden='true'></i>
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              {/* <a
                href='https://www.creative-tim.com/license?ref=mkr-footer'
                className={classes.block}
                target='_blank'
              >
                Licenses
              </a> */}
              <a href='https://github.com/iit-technology-ambit/' target="_blank">
                <i class='fa fa-github-square fa-2x' aria-hidden='false' />
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          {/* &copy; {1900 + new Date().getYear()} , made with{' '}
          <Favorite className={classes.icon} /> by{' '}
          <a
            href='https://www.creative-tim.com?ref=mkr-footer'
            className={aClasses}
            target='_blank'
          >
            Creative Tim
          </a>{' '}
          for a better web. */}
          <List className={classes.list} style={{ marginRight: '120px' }}>
            <ListItem className={classes.inlineBlock}>
              <a
                href='https://cdn.iit-techambit.in/generalAssets/privacy_policy.html'
                target='blank'
                className='footer-links'
              >
                Privacy Policy
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href='https://cdn.iit-techambit.in/generalAssets/tnc.html'
                target='blank'
                className='footer-links'
              >
                Terms and Conditions
              </a>
            </ListItem>
          </List>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
