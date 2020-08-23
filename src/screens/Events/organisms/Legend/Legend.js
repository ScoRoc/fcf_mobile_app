// Libraries
import React from 'react';
import PropTypes from 'prop-types';
// Atoms
import { Box, Text } from 'atoms';

// Legend

const Legend = ({ children, ...props }) => {
  // const createEachKey = (evtKey, i) => {
  //   const [key, value] = evtKey;
  //   return (
  //     <EventKey
  //       eventKey={value}
  //       filterEventTypes={props.filterEventTypes}
  //       removedTypes={props.removedTypes}
  //       width={width() / numOfKeys}
  //       key={i}
  //     />
  //   );
  // };
  // const keys = Object.entries(getEventKeys).map(createEachKey);

  const keys = <Text>legend...</Text>;
  return (
    <Box flexDirection='row' justifyContent='space-around' paddingBottom={10} paddingTop={10}>
      {keys}
    </Box>
  );
};

Legend.propTypes = {
  children: PropTypes.element,
};

Legend.defaultProps = {
  children: null,
};

export default Legend;
