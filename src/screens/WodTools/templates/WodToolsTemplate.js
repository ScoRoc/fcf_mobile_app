// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import { StatusBar } from 'react-native';
// Atoms
import { Box, Text, TouchableIOSOpacity } from 'atoms';
// WodsTools Molecules
import { WodToolsTile } from '../molecules';
// WodTools List
import wodTools from './wodTools';

// WodToolsSeparator

const Line = props => (
  <Box backgroundColor='aqua' height={5} marginBottom={4} marginTop={4} width='80%' {...props} />
);

// WodToolsTemplate

const WodToolsTemplate = ({ navigation, onTilePress, ...props }) => {
  // Tiles

  const tiles = Object.values(wodTools)
    .map(tool => (
      <Box alignItems='center' key={tool.toScreen} width='100%'>
        <WodToolsTile
          iconColor='mediumspringgreen'
          iconLibrary={tool.iconLibrary}
          iconName={tool.iconName}
          label={tool.label}
          labelColor='deeppink'
          onPress={() => onTilePress({ toScreen: tool.toScreen })}
        />
      </Box>
    ))
    .reduce(
      (allTools, tool, i, arr) =>
        i < arr.length - 1
          ? [...allTools, tool, <Line key={`${tool.toScreen}-line`} />]
          : [...allTools, tool],
      [],
    );

  // Return

  return (
    // <WodsContext.Provider value={{ foo: 'foo' }}>
    <Box
      alignItems='center'
      backgroundColor='indigo'
      flex={1}
      justifyContent='space-evenly'
      {...props}
    >
      <StatusBar barStyle='light-content' />
      <TouchableIOSOpacity onPress={() => navigation.navigate('UnitConverter-test')}>
        <Text>Unit Converter New - test</Text>
      </TouchableIOSOpacity>
      <TouchableIOSOpacity onPress={() => navigation.navigate('PercentTable-test')}>
        <Text>Percent Table New - test</Text>
      </TouchableIOSOpacity>

      {tiles}
    </Box>
    // </WodsContext.Provider>
  );
};

WodToolsTemplate.propTypes = {
  onTilePress: PropTypes.func.isRequired,
};

WodToolsTemplate.defaultProps = {
  onTilePress: null,
};

export default WodToolsTemplate;
