import React from 'react';
import Icon from '../../../components/Icon';

import { black, blackBG, greyDark, greyMedium, white } from '../../../variables/variables';

const tiles = () => {
  const tilesInfo = {
    seven: {
      type: 'add',
      value: 7,
      color: white,
      backgroundColor: greyDark,
    },
    eight: {
      type: 'add',
      value: 8,
      color: white,
      backgroundColor: greyDark,
    },
    nine: {
      type: 'add',
      value: 9,
      color: white,
      backgroundColor: greyDark,
    },
    four: {
      type: 'add',
      value: 4,
      color: white,
      backgroundColor: greyDark,
    },
    five: {
      type: 'add',
      value: 5,
      color: white,
      backgroundColor: greyDark,
    },
    six: {
      type: 'add',
      value: 6,
      color: white,
      backgroundColor: greyDark,
    },
    one: {
      type: 'add',
      value: 1,
      color: white,
      backgroundColor: greyDark,
    },
    two: {
      type: 'add',
      value: 2,
      color: white,
      backgroundColor: greyDark,
    },
    three: {
      type: 'add',
      value: 3,
      color: white,
      backgroundColor: greyDark,
    },
    period: {
      type: 'clear',
      value: 'C',
      // color: black,
      color: blackBG,
      backgroundColor: greyMedium,
    },
    zero: {
      type: 'add',
      value: 0,
      color: white,
      backgroundColor: greyDark,
    },
    delete: {
      type: 'delete',
      value:  <Icon
                // color={black}
                color={blackBG}
                library='MaterialCommunityIcons'
                name='keyboard-backspace'
                size={45}
              />,
      color: white,
      backgroundColor: greyMedium,
    },
  };
  return {
    allTiles: (() => tilesInfo)(),
  }
};

export const { allTiles } = tiles();
