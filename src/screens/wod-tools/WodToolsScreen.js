import React from 'react';
import { Button, Dimensions, ImageBackground, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import WodToolTile from './WodToolTile';

const { height, width } = Dimensions.get('window');
const imgUri = `https://www.placecage.com/c/${width}/${height}`;
const imgBgStyle = {height, width};

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
  };
  return {
    getAllTools: (() => wodTools)(),
    getToolInfoByName: name => wodTools[name],
  };
};
const { getAllTools, getToolInfoByName } = allWodTools();

// export default WodToolsScreen = props => {
export default class WodToolsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    const onPress = screen => this.props.navigation.navigate(screen);
    const wodTools = Object.entries(getAllTools).map((tool, i) => {
      const [ key, value ] = tool;
      const { iconName, library, screen, text } = value;
      return (
        <WodToolTile
          iconName={iconName}
          key={i}
          library={library}
          onPress={onPress}
          screen={screen}
          text={text}
        />
      );
    });
    return (
      <View style={styles.screen}>
        <ImageBackground blurRadius={4} source={{uri: imgUri}} style={imgBgStyle}>
          <Button title='open drawer' onPress={() => this.props.navigation.openDrawer()} />
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
    // justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333'
  },
  outerGrid: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  grid: {

  },
});
