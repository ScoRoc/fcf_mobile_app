import React from 'react';
import { Button, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

// import { connect } from 'react-redux';
// import { testTest } from '../redux/actions/actions';

import Dummy from '../components/Dummy';

export default MainScreen = props => {
// const MainScreen = props => {
  // props.testTest('flaka');
  // console.log('tester: ', props.tester);
  return (
    <View style={styles.screen}>
      <Dummy color='Blue' bgColor='Pink' />
      <View>
        <Text style={styles.text}>Hello from MainScreen</Text>
        <Button title='to IAP' onPress={() => props.navigation.navigate('IAP')} />
        <Button title='open drawer' onPress={() => props.navigation.openDrawer()} />
      </View>
      <Dummy color='Pink' bgColor='Blue' />
    </View>
  )
};

const styles = EStyleSheet.create({
  $padding: '50rem',
  screen: {
    paddingTop: '$padding',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333'
  },
  text: {
    color: '$pink',
    fontSize: '22rem'
  }
});

// const mapStateToProps = state => {
//   return { tester: state.tester };
// };
//
// const mapDispatchToProps = dispatch => {
//   return {
//     testTest: tester => dispatch(testTest(tester))
//   };
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
