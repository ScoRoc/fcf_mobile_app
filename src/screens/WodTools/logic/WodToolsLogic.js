// Libraries
import React from 'reactn';
import PropTypes from 'prop-types';
// WodTools Templates
import WodToolsTemplate from '../templates/WodToolsTemplate';

// WodToolsLogic

const WodToolsLogic = ({ navigation }) => {
  // Functions

  const handleTilePress = ({ toScreen }) => {
    navigation.navigate(toScreen);
  };

  // Return

  return <WodToolsTemplate onTilePress={handleTilePress} />;
};

WodToolsLogic.propTypes = {
  navigation: PropTypes.object, // react-navigation navigation object
};

WodToolsLogic.defaultProps = {
  navigation: null,
};

export default WodToolsLogic;
