import React from 'react';
import Icon from '../../../components/Icon';
import EStyleSheet from 'react-native-extended-stylesheet';

const tiles = () => {
  const tilesInfo = {
    seven: {
      type: 'add',
      value: 7,
      color: () => EStyleSheet.value('$white'),
      backgroundColor: () => EStyleSheet.value('$greyDark'),
    },
    eight: {
      type: 'add',
      value: 8,
      color: () => EStyleSheet.value('$white'),
      backgroundColor: () => EStyleSheet.value('$greyDark'),
    },
    nine: {
      type: 'add',
      value: 9,
      color: () => EStyleSheet.value('$white'),
      backgroundColor: () => EStyleSheet.value('$greyDark'),
    },
    four: {
      type: 'add',
      value: 4,
      color: () => EStyleSheet.value('$white'),
      backgroundColor: () => EStyleSheet.value('$greyDark'),
    },
    five: {
      type: 'add',
      value: 5,
      color: () => EStyleSheet.value('$white'),
      backgroundColor: () => EStyleSheet.value('$greyDark'),
    },
    six: {
      type: 'add',
      value: 6,
      color: () => EStyleSheet.value('$white'),
      backgroundColor: () => EStyleSheet.value('$greyDark'),
    },
    one: {
      type: 'add',
      value: 1,
      color: () => EStyleSheet.value('$white'),
      backgroundColor: () => EStyleSheet.value('$greyDark'),
    },
    two: {
      type: 'add',
      value: 2,
      color: () => EStyleSheet.value('$white'),
      backgroundColor: () => EStyleSheet.value('$greyDark'),
    },
    three: {
      type: 'add',
      value: 3,
      color: () => EStyleSheet.value('$white'),
      backgroundColor: () => EStyleSheet.value('$greyDark'),
    },
    period: {
      type: 'clear',
      value: 'C',
      // color: EStyleSheet.value('$black'),
      color: () => EStyleSheet.value('$blackBG'),
      backgroundColor: () => EStyleSheet.value('$greyMedium'),
    },
    zero: {
      type: 'add',
      value: 0,
      color: () => EStyleSheet.value('$white'),
      backgroundColor: () => EStyleSheet.value('$greyDark'),
    },
    delete: {
      type: 'delete',
      value:  <Icon
                // color={() => EStyleSheet.value('$black')}
                color={() => EStyleSheet.value('$blackBG')}
                library='MaterialCommunityIcons'
                name='keyboard-backspace'
                size={45}
              />,
      color: () => EStyleSheet.value('$white'),
      backgroundColor: () => EStyleSheet.value('$greyMedium'),
    },
  };
  return {
    allTiles: (() => tilesInfo)(),
  }
};

export const { allTiles } = tiles();
