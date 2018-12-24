import React from 'react';
import { Button, ImageBackground, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import WodToolTile from './WodToolTile';

const allWodTools = () => {
  const wodTools = {
    unitConverter: {
      iconName: 'calculator-variant',
      library: 'MaterialCommunityIcons',
      screen: 'UnitConverter',
      text: 'Converter',
    },
    percentTable: {
      iconName: 'percent',
      library: 'Feather',
      screen: 'PercentTable',
      text: 'Percent Table',
    },
    // percentTable2: {
    //   iconName: 'percent',
    //   library: 'Feather',
    //   screen: 'PercentTable',
    //   text: 'Percent Table',
    // },
    // percentTable3: {
    //   iconName: 'percent',
    //   library: 'Feather',
    //   screen: 'PercentTable',
    //   text: 'Percent Table',
    // },
    // percentTable4: {
    //   iconName: 'percent',
    //   library: 'Feather',
    //   screen: 'PercentTable',
    //   text: 'Percent Table',
    // },
    // percentTable5: {
    //   iconName: 'percent',
    //   library: 'Feather',
    //   screen: 'PercentTable',
    //   text: 'Percent Table',
    // },
  };
  return {
    getAllTools: (() => wodTools)(),
    getToolInfoByName: name => wodTools[name],
  };
};
const { getAllTools, getToolInfoByName } = allWodTools();

export default class WodToolsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const height = () => EStyleSheet.value('$height');
    const width = () => EStyleSheet.value('$width');
    const imgUri = `https://www.placecage.com/c/${width()}/${height()}`;
    const imgBgStyle = {height: height(), width: width()};
    const wodTools = Object.entries(getAllTools).map((tool, i) => {
      const [ key, value ] = tool;
      const { iconName, library, screen, text } = value;
      return (
        <WodToolTile
          iconName={iconName}
          key={i}
          library={library}
          onPress={screen => this.props.navigation.navigate(screen)}
          screen={screen}
          text={text}
        />
      );
    });
    return (
      <View style={styles.screen}>
        <ImageBackground blurRadius={4} source={{uri: imgUri}} style={imgBgStyle}>
          <View style={styles.outerGrid}>
            <View style={styles.grid}>
              {wodTools}
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  };
};

const styles = EStyleSheet.create({
  $padding: '50rem',
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  outerGrid: {
    paddingBottom: '$tabHeight',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  grid: {
    width: '$width',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});
