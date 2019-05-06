import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

export default function WodSubScreen(props) {
  const { wods } = props;
  const allWods = wods.map((wod, i) => {
    return <View key={i + 'key'} style={styles.allWods}>{wod}</View>
  });
  return (
    <ScrollView style={styles.scrollView}>
      {allWods}
    </ScrollView>
  );
}

const styles = EStyleSheet.create({
  scrollView: {
    width: '100%',
    flex: 1,
  },
  allWods: {
    // flex: '$width',
  },
});
