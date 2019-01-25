import EStyleSheet from 'react-native-extended-stylesheet';

export default eventKeys = () => {
  const keys = {
    social: {
      color: () => EStyleSheet.value('$greenAccent'),
      library: 'MaterialCommunityIcons',
      name: 'account-group',
      text: 'Social',
      type: 'social',
    },
    competition: {
      color: () => EStyleSheet.value('$blueAccent'),
      library: 'MaterialCommunityIcons',
      name: 'medal',
      text: 'Competition',
      type: 'competition',
    },
    community: {
      color: () => EStyleSheet.value('$purpleAccent'),
      library: 'FontAwesome',
      name: 'globe',
      text: 'Community',
      type: 'community',
    },
  };
  return {
    getEventKeys: (() => keys)(),
    getEventTypes: (() => Object.entries(keys).map(entry => entry[1].type))(),
    getKeysText: (() => Object.values(keys).map(key => key.text))(),
  }
};
