import EStyleSheet from 'react-native-extended-stylesheet';

export default eventKeys = () => {
  const keys = {
    social: {
      color: () => EStyleSheet.value('$greenAccent'),
      library: 'MaterialCommunityIcons',
      name: 'account-group',
      text: 'Social',
    },
    competition: {
      color: () => EStyleSheet.value('$blueAccent'),
      library: 'MaterialCommunityIcons',
      name: 'medal',
      text: 'Competition',
    },
    community: {
      color: () => EStyleSheet.value('$purpleAccent'),
      library: 'FontAwesome',
      name: 'globe',
      text: 'Community',
    },
  };
  return {
    getKeys: (() => keys)(),
    getKeyColorByText: text => keys[Object.keys(keys).find(key => keys[key].text === text)].color(),
    getKeysText: (() => Object.values(keys).map(key => key.text))(),
  }
};
