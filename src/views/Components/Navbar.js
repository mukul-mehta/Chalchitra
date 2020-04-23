import React from 'react';

// core components
import Header from 'components/Header/Header.js';

// sections for this page
import HeaderLinks from 'components/Header/HeaderLinks.js';

export default function Navbar(props) {
  const { ...rest } = props;

  return (
    <div>
      <Header
        rightLinks={<HeaderLinks />}
        fixed
        color='white'
        changeColorOnScroll={{
          height: 400,
          color: 'white'
        }}
        {...rest}
      />
    </div>
  );
}
