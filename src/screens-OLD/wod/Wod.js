import React from 'react'
import { Text, View } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import moment from 'moment'

export default function Wod(props) {
  const { text, wodDate } = props;
  return (
    <View style={styles.wodWrapper}>
      <Text style={[ styles.day, styles.text ]}>{wodDate}</Text>

      <Text style={[ styles.wodText, styles.text ]}>{text}</Text>

      <View style={styles.line} />
    </View>
  );
}

const styles = EStyleSheet.create({
  wodWrapper: {
    width: '$width',
    padding: '15rem',
    backgroundColor: '$greyMediumDark',
  },
  text: {
    color: '$white',
    fontSize: '20rem',
  },
  day: {
    paddingBottom: '20rem',
  },
  wodText: {
    paddingBottom: '20rem',
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: '$black',
  },
});
