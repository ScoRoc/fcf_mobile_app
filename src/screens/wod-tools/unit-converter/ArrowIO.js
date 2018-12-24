import React from 'react';
import { Animated, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Icon from '../../../components/Icon';
import Touchable from '../../../components/Touchable';
import ArrowInput from './ArrowInput';
import ArrowOutput from './ArrowOutput';

export default class ArrowIO extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animatedX: new Animated.Value(0),
      toUnit: 'lb',
    }
  }

  col = () => EStyleSheet.value('$width') / 18;

  slideInput = () => {
    const { animatedX, toUnit } = this.state;
    const toValue = toUnit === 'lb' ? this.col() * 9 : 0;
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

  handleLongPress = () => {
    this.slideInput();
    this.props.clearInput();
  }

  render() {
    const { input, kg, lb } = this.props;
    const { animatedX } = this.state;
    const yellow = () => EStyleSheet.value('$yellow');
    return (
      <View>
        <View style={styles.ioWrap}>
          <ArrowOutput value={kg} unit='KG' passedStyles={{text: styles.text, unitText: styles.unitText, view: styles.output}} />
          <Touchable onPress={this.slideInput} onLongPress={this.handleLongPress} style={styles.btn} iosType='opacity'>
            <Icon color={yellow()} library='AntDesign' name='swap' size={47} />
          </Touchable>
          <ArrowOutput value={lb} unit='LB' passedStyles={{text: styles.text, unitText: styles.unitText, view: styles.output}} />
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
  $col: '$width / 18',
  $ioWidth: '$col * 16',
  $btnWidth: '$col * 2',
  $leftOverWidth: '$ioWidth - $btnWidth',
  $pad: '10rem',
  $borderRadius: '25rem',
  ioWrap: {
    width: '$ioWidth',
    marginLeft: '$col',
    marginRight: '$col',
    paddingLeft: '$pad',
    paddingRight: '$pad',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '$greyDark',
    borderTopLeftRadius: '$borderRadius',
    borderBottomRightRadius: '$borderRadius',
  },
  output: {
    height: '$height * .13',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    height: '55%',
    width: '$leftOverWidth / 2',
    position: 'absolute',
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$blackBG',
    borderTopLeftRadius: '$borderRadius',
    borderBottomRightRadius: '$borderRadius',
    borderWidth: '7rem',
    borderColor: '$greyDark',
  },
  text: {
    color: '$white',
    fontSize: '35rem',
  },
  unitText: {
    fontSize: '25rem',
  },
  btn: {
    width: '$btnWidth',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
