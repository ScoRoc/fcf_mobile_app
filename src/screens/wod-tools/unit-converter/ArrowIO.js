import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Icon from '../../../components/Icon';
import Touchable from '../../../components/Touchable';
import ArrowInput from './ArrowInput';
import ArrowOutput from './ArrowOutput';

import { height, width } from '../../../variables/variables';

// export default ArrowIO = props => {
//   const { input, kg, lb } = props;
//   return (
//     <View style={styles.outerWrap}>
//       <View style={styles.ioWrap}>
//         <ArrowOutput value={lb} unit='lb' styles={{view: styles.output, text: styles.text}} />
//         <Touchable style={styles.btn} iosType='opacity'>
//           <Icon color='black' library='AntDesign' name='swap' size={45} />
//         </Touchable>
//         <ArrowOutput value={kg} unit='kg' styles={{view: styles.output, text: styles.text}} />
//         <ArrowInput value={input || '0'} styles={{view: styles.input, text: styles.text}} />
//       </View>
//     </View>
//   );
// };

export default class ArrowIO extends React.Component {

  setInputWidth = e => {
    console.log('e: ', e)
  }

  render() {
    const { input, kg, lb } = this.props;
    const setInputWidth = e => {
      console.log('e: ', e);
    }
    return (
      <View style={styles.outerWrap}>
        <View style={styles.ioWrap}>
          <ArrowOutput setInputWidth={this.setInputWidth} value={lb} unit='lb' styles={{view: styles.output, text: styles.text}} />
          <Touchable style={styles.btn} iosType='opacity'>
            <Icon color='black' library='AntDesign' name='swap' size={45} />
          </Touchable>
          <ArrowOutput setInputWidth={this.setInputWidth} value={kg} unit='kg' styles={{view: styles.output, text: styles.text}} />
          <ArrowInput value={input || '0'} styles={{view: styles.input, text: styles.text}} />
        </View>
      </View>
    );
  }
};

const styles = EStyleSheet.create({
  $col: width / 16,
  $pad: '10rem',
  // $marg: height * .05,
  outerWrap: {
    // marginTop: '$marg',
    // marginBottom: '$marg',
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
  },
  input: {
    position: 'absolute',
    left: '$pad',
    backgroundColor: 'pink',
  },
  output: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'green'
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
