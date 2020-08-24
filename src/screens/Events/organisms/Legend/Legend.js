// Libraries
import React from 'react';
import PropTypes from 'prop-types';
// Atoms
import { Box } from 'atoms';
// LegendKey
import LegendKey from './LegendKey';

// Legend

const Legend = ({ eventTypes, onLegendKeyPress, selectedEventTypes, ...props }) => {
  const makeKey = ([key, value]) => {
    const color = selectedEventTypes?.includes(key) ? value.color : 'brown';
    return (
      <LegendKey
        color={color}
        iconLibrary={value.iconLibrary}
        iconName={value.iconName}
        key={key}
        label={value.label}
        onPress={() => onLegendKeyPress?.({ legendKey: key })}
      />
    );
  };
  const keys = Object.entries(eventTypes).map(makeKey);

  return (
    <Box
      flexDirection='row'
      justifyContent='space-around'
      paddingBottom={10}
      paddingTop={10}
      {...props}
    >
      {keys}
    </Box>
  );
};

Legend.propTypes = {
  eventTypes: PropTypes.object,
  onLegendKeyPress: PropTypes.func,
  selectedEventTypes: PropTypes.array.isRequired,
};

Legend.defaultProps = {
  eventTypes: null,
  onLegendKeyPress: null,
  selectedEventTypes: [],
};

export default Legend;
