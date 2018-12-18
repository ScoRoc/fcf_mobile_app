export default eventKeys = () => {
  const keys = {
    social: {
      text: 'Social',
      color: 'red',
    },
    competition: {
      text: 'Competition',
      color: 'blue',
    },
    community: {
      text: 'Community',
      color: 'purple',
    },
  };
  return {
    getKeys: (() => keys)(),
    getKeyColorByText: text => keys[Object.keys(keys).find(key => keys[key].text === text)].color,
    getKeysText: (() => Object.values(keys).map(key => key.text))(),
  }
};
