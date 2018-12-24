import EStyleSheet from 'react-native-extended-stylesheet';

export default eventKeys = () => {
  const keys = {
    social: {
      text: 'Social',
      color: () => EStyleSheet.value('$greenAccent'),
    },
    competition: {
      text: 'Competition',
      color: () => EStyleSheet.value('$blueAccent'),
    },
    community: {
      text: 'Community',
      color: () => EStyleSheet.value('$purpleAccent'),
    },
  };
  return {
    getKeys: (() => keys)(),
    getKeyColorByText: text => keys[Object.keys(keys).find(key => keys[key].text === text)].color(),
    getKeysText: (() => Object.values(keys).map(key => key.text))(),
  }
};
