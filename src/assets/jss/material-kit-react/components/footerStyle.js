import { container, primaryColor } from 'assets/jss/material-kit-react.js';

const footerStyle = {
  block: {
    color: 'inherit',
    padding: '0.9375rem',
    fontWeight: '500',
    fontSize: '12px',
    // textTransform: 'uppercase',
    borderRadius: '3px',
    textDecoration: 'none',
    position: 'relative',
    display: 'block'
  },
  left: {
    float: 'left!important',
    display: 'block'
  },
  right: {
    padding: '15px 0',
    margin: '0',
    float: 'right!important'
  },
  footer: {
    padding: '0.9375rem 0',
    textAlign: 'center',
    display: 'flex',
    zIndex: '100',
    position: 'relative'
  },
  a: {
    color: primaryColor,
    textDecoration: 'none',
    backgroundColor: 'transparent'
  },
  footerWhiteFont: {
    '&,&:hover,&:focus': {
      color: '#FFFFFF'
    }
  },
  container,
  list: {
    marginBottom: '0',
    padding: '0',
    marginTop: '0',
    marginLeft: '90px'
  },
  inlineBlock: {
    display: 'inline-block',
    padding: '0px',
    width: 'auto',
    margin: '5px'
  },
  icon: {
    width: '18px',
    height: '18px',
    position: 'relative',
    top: '3px'
  }
};
export default footerStyle;
