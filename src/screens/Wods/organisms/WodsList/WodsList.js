// Libraries
import React, { useContext, useState } from 'react';
import { RefreshControl } from 'react-native';
import PropTypes from 'prop-types';
// Atoms
import { Box, Scrollview } from 'atoms';
// Wods Organisms
import Wod from '../Wod/Wod';
// Wods Context
import WodsContext from '../../logic/WodsContext';

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
  // State

  const [refreshing, setRefreshing] = useState(false);

  // Context

  const { getCurrentWeekWods } = useContext(WodsContext);

  // Functions

  const handleRefresh = async () => {
    setRefreshing(true);
    await getCurrentWeekWods();
    setRefreshing(false);
  };

  // Wods

  const wods = _wods.map((wod, i, arr) => (
    <Box key={wod._id}>
      <Wod marginBottom={i === arr.length - 1 ? 4 : 0} marginTop={i === 0 ? 4 : 0} wod={wod} />
      {i !== arr.length - 1 && <Line />}
    </Box>
  ));

  // Return

  return (
    <Scrollview
      backgroundColor='darkslateblue'
      flex={1}
      paddingLeft={25.5}
      paddingRight={25.5}
      refreshControl={
        <RefreshControl
          colors={['red']}
          onRefresh={handleRefresh}
          refreshing={refreshing}
          tintColor={'red'}
        />
      }
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
