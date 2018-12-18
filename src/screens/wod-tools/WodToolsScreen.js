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

export default WodToolsScreen = props => {
  const onPress = screen => props.navigation.navigate(screen);
  const wodTools = Object.keys(getAllTools).map((name, i) => {
    const tool = getToolInfoByName(name);
    const { iconName, library, screen, text } = tool;
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
  // const foo = Object.entries(getAllTools);
  return (
    <View style={styles.screen}>
      <ImageBackground blurRadius={4} source={{uri: imgUri}} style={imgBgStyle}>
        <Text style={styles.text}>Hello from WodToolsScreen</Text>
        <Button title='open drawer' onPress={() => props.navigation.openDrawer()} />
        {wodTools}
      </ImageBackground>
    </View>
  )
};

const styles = EStyleSheet.create({
  $padding: '50rem',
  screen: {
    flex: 1,
    // justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333'
  },
  text: {
    color: '$pink',
    fontSize: '22rem'
  }
});
