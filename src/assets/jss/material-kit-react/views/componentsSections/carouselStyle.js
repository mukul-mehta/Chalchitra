import { container } from 'assets/jss/material-kit-react.js';
import { CenterFocusStrong } from '@material-ui/icons';

const carouselStyle = {
  section: {
    padding: '70px 0'
  },
  container,
  marginAuto: {
    marginLeft: 'auto !important',
    marginRight: 'auto !important'
  },
  testimonial: {
    fontWeight: '500'
    // textAlign: 'center'
  },
  name: {
    // textAlign: 'center',
    fontWeight: '400',
    fontSize: '18px'
  },
  indivTest: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  nameWithSt: {
    marginTop: '-4%',
    textAlign: 'center'
  },
  bgCol: {
    backgroundColor: '#b2dde6'
  },
  columnFlex: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
};

export default carouselStyle;
