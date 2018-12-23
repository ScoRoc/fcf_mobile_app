import { blueAccent, greenAccent, purpleAccent } from '../../../variables/variables';

export default eventKeys = () => {
  const keys = {
    social: {
      text: 'Social',
      color: greenAccent,
    },
    competition: {
      text: 'Competition',
      color: blueAccent,
    },
    community: {
      text: 'Community',
      color: purpleAccent,
    },
  };
  return {
    getKeys: (() => keys)(),
    getKeyColorByText: text => keys[Object.keys(keys).find(key => keys[key].text === text)].color,
    getKeysText: (() => Object.values(keys).map(key => key.text))(),
  }
};
