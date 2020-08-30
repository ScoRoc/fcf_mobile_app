// Libraries
import React from 'react';
import PropTypes from 'prop-types';
// Atoms
import { Box, Scrollview } from 'atoms';
// Wods Organisms
import Wod from '../Wod/Wod';

// WodsSeparator

const Line = props => (
  <Box
    backgroundColor='lightseagreen'
    height={2}
    marginBottom={4}
    marginTop={4}
    width='100%'
    {...props}
  />
);

// WodsList

const WodsList = ({ wods: _wods, ...props }) => {
  const wods = _wods.map((wod, i, arr) => (
    <Box key={wod._id}>
      <Wod marginBottom={i === arr.length - 1 ? 4 : 0} marginTop={i === 0 ? 4 : 0} wod={wod} />
      {i !== arr.length - 1 && <Line />}
    </Box>
  ));
  return (
    <Scrollview
      backgroundColor='darkslateblue'
      flex={1}
      paddingLeft={25.5}
      paddingRight={25.5}
      {...props}
    >
      {wods}
    </Scrollview>
  );
};

WodsList.propTypes = {
  wods: PropTypes.array.isRequired,
};

WodsList.defaultProps = {
  wods: [],
};

export default WodsList;
