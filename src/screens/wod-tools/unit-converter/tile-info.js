import React from 'react';
import Icon from '../../../components/Icon';

const tiles = () => {
  const tilesInfo = {
    seven: {
      type: 'add',
      value: 7,
    },
    eight: {
      type: 'add',
      value: 8,
    },
    nine: {
      type: 'add',
      value: 9,
    },
    four: {
      type: 'add',
      value: 4,
    },
    five: {
      type: 'add',
      value: 5,
    },
    six: {
      type: 'add',
      value: 6,
    },
    one: {
      type: 'add',
      value: 1,
    },
    two: {
      type: 'add',
      value: 2,
    },
    three: {
      type: 'add',
      value: 3,
    },
    period: {
      type: 'add',
      value: '.',
    },
    zero: {
      type: 'add',
      value: 0,
    },
    delete: {
      type: 'delete',
      value:  <Icon
                color='black'
                library='MaterialCommunityIcons'
                name='keyboard-backspace'
                size={45}
              />,
    },
  };
  return {
    allTiles: (() => tilesInfo)(),
  }
};

export const { allTiles } = tiles();
