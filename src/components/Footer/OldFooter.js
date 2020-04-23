import React, { Component } from 'react';

// import Button from '../CustomButtons/Button.jsx';
import Button from 'components/CustomButtons/Button.js';

import './OldFooter.scss';

export default class Footer extends Component {
  render() {
    return (
      <div className='footer-w'>
        <div className='lined-t'>
          <h2 className='lft'>IIT Tech Ambit</h2>
        </div>
        <div className='fg-w'>
          <div className='lg-f'>
            <p>
              {' '}
              <a
                href='https://cdn.iit-techambit.in/generalAssets/privacy_policy.html'
                target='blank'
                className='footer-links'
              >
                Privacy Policy
              </a>
            </p>
            <p>
              {' '}
              <a
                href='https://cdn.iit-techambit.in/generalAssets/tnc.html'
                target='blank'
                className='footer-links'
              >
                Terms and Conditions
              </a>
            </p>
            {/* <p>
              <a
                href='https://iit-techambit.in/#what_we_do'
                className='footer-links'
              >
                {' '}
                About{' '}
              </a>
            </p> */}
          </div>
          <div className='mg-f'>
            <a href='https://www.facebook.com/iit.tech.ambit/?epa=SEARCH_BOX'>
              <i class='fa fa-facebook-official fa-3x' aria-hidden='true'></i>
            </a>
            <a href='https://medium.com/iit-technology-ambit'>
              <i class='fa fa-medium fa-3x' aria-hidden='true'></i>
            </a>
            <a href='https://www.instagram.com/iit_techambit/'>
              <i class='fa fa-instagram fa-3x' aria-hidden='true'></i>
            </a>
            <a href='https://github.com/iit-technology-ambit/'>
              <i class='fa fa-github-square fa-3x' aria-hidden='false' />
            </a>
          </div>
          <div className='rg-f'>
            <p> IIT Kharagpur </p>
            <p> Kharagpur, 721302 </p>
            <p> wb, india </p>
            {/* <p> +91-8969169656 </p> */}
            <p className='mail-ft'>
              <a
                href='mailto:connect@iit-techambit.in'
                target='blank'
                className='footer-links'
              >
                connect@iit-techambit.in
              </a>
            </p>
          </div>
        </div>
        <div className='vl-f'>
          <p className='cs-f'>
            {' '}
            <a href='/' className='footer-links'>
              Subscribe To Newsletter
            </a>{' '}
          </p>
        </div>
        <div className='crt-f'> © IIT Technology Ambit 2019 </div>
      </div>
    );
  }
}
