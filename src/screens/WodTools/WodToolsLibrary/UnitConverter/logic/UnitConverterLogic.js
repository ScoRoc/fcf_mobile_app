// Libraries
import React from 'react';
import PropTypes from 'prop-types';
// UnitConverterTemplate
import UnitConverterTemplate from '../templates/UnitConverterTemplate';

// UnitConverterLogic

const UnitConverterLogic = ({ navigation }) => {
  return <UnitConverterTemplate />;
};

UnitConverterLogic.propTypes = {
  navigation: PropTypes.object, // react-navigation navigation object
};

UnitConverterLogic.defaultProps = {
  navigation: null,
};

export default UnitConverterLogic;
