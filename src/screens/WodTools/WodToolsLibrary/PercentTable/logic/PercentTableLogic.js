// Libraries
import React from 'react';
import PropTypes from 'prop-types';
// PercentTableTemplate
import PercentTableTemplate from '../templates/PercentTableTemplate';

// PercentTableLogic

const PercentTableLogic = ({ navigation }) => {
  return <PercentTableTemplate />;
};

PercentTableLogic.propTypes = {
  navigation: PropTypes.object, // react-navigation navigation object
};

PercentTableLogic.defaultProps = {
  navigation: null,
};

export default PercentTableLogic;
