import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
export const firstPageX = 0;
export const secondPageX = width;

export default homeScreenPages = () => {
  const pages = {
    announcements: {
      title: 'Announcements',
      xStart: firstPageX,
    },
    events: {
      title: 'Events',
      xStart: secondPageX,
    },
  };
  return {
    getPages: (() => pages)(),
    getPageTitles: (() => Object.values(pages).map(page => page.title))(),
    getPagesSpecifcValue: value => Object.values(pages).map(page => page[value]),
    getPageByXValue: x => Object.keys(pages).find(key => pages[key].xStart === x),
    getPageTitleByXValue: x => pages[Object.keys(pages).find(key => pages[key].xStart === x)].title,
  };
};
