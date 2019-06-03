import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'

export const firstPageX = () => 0;
export const secondPageX = () => EStyleSheet.value('$width');
export const thirdPageX = () => EStyleSheet.value('$width') * 2;

export const xScrollToValues = {
  'This week': firstPageX,
  'Past WODs': secondPageX,
  // 'foo': thirdPageX
}

export default wodPages = () => {
  const pages = {
    thisWeek: {
      title: 'This week',
      xStart: () => firstPageX(),
    },
    pastWods: {
      title: 'Past WODs',
      xStart: () => secondPageX(),
    },
    // foo: {
    //   title: 'foo',
    //   xStart: () => thirdPageX(),
    // }
  }
  return {
    getPages: (() => pages)(),
    getPageTitleByXValue: x => pages[Object.keys(pages).find(key => pages[key].xStart() === x)].title,
    getPageTitles: (() => Object.values(pages).map(page => page.title))(),
  }
}
