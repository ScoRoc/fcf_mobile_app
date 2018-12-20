import React from 'react';
import { Animated, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Icon from '../../../components/Icon';
import Touchable from '../../../components/Touchable';
import ArrowInput from './ArrowInput';
import ArrowOutput from './ArrowOutput';

import { height, width } from '../../../variables/variables';
const col = width / 16;

export default class ArrowIO extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animatedX: new Animated.Value(0),
      toUnit: 'lb',
    }
  }

  slideInput = () => {
    const { animatedX, toUnit } = this.state;
    const toValue = toUnit === 'lb' ? col * 8 : 0;
    Animated.timing(
      animatedX,
      {
        toValue: toValue,
        duration: 250,
      },
    ).start();
    const newUnit = toUnit === 'lb' ? 'kg' : 'lb';
    this.setState({toUnit: newUnit});
  }

  render() {
    const { input, kg, lb } = this.props;
    const { animatedX } = this.state;
    return (
      <View style={styles.outerWrap}>
        <View style={styles.ioWrap}>
          <ArrowOutput value={kg} unit='kg' styles={{view: styles.output, text: styles.text}} />
          <Touchable onPress={this.slideInput} style={styles.btn} iosType='opacity'>
            <Icon color='black' library='AntDesign' name='swap' size={45} />
          </Touchable>
          <ArrowOutput value={lb} unit='lb' styles={{view: styles.output, text: styles.text}} />
          <Animated.View style={[ styles.input, {transform: [{translateX: animatedX}]} ]}>
            {/* <ArrowInput value={input || '0'} styles={{view: styles.arrowInput, text: styles.text}} /> */}
            <Text style={styles.text}>{input || '0'}</Text>
          </Animated.View>
        </View>
      </View>
    );
  }
};

const styles = EStyleSheet.create({
  $col: col,
  $pad: '10rem',
  $borderRadius: '25rem',
  // $marg: height * .05,
  outerWrap: {
    backgroundColor: 'darkseagreen',
  },
  ioWrap: {
    width: '$col * 14',
    marginLeft: '$col',
    marginRight: '$col',
    paddingLeft: '$pad',
    paddingRight: '$pad',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'mediumorchid',
    borderTopLeftRadius: '$borderRadius',
    borderBottomRightRadius: '$borderRadius',
  },
  input: {
    height: '100%',
    width: '$col * 4.5',
    position: 'absolute',
    // left: '$pad',
    paddingLeft: '$pad',
    justifyContent: 'center',
    backgroundColor: 'pink',
    borderTopLeftRadius: '$borderRadius',
    borderBottomRightRadius: '$borderRadius',
    borderWidth: '6rem',
    borderColor: 'mediumorchid',
  },
  arrowInput: {
    //
  },
  output: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'green'
  },
  text: {
    fontSize: '23rem',
  },
  btn: {
    width: '$col * 2',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
