// Libraries
import React from 'react';
import PropTypes from 'prop-types';
// Atoms
import { Box } from 'atoms';
// Organisms
import Carousel from 'organisms/Carousel';

// PageCarousel

const PageCarousel = ({ children }) => {
  return (
    <Box flex={1}>
      <Carousel flex={1}>{children}</Carousel>
    </Box>
  );
};

PageCarousel.propTypes = {
  //
};

PageCarousel.defaultProps = {
  //
};

export default PageCarousel;
