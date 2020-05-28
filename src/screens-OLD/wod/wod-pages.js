// Libraries
import EStyleSheet from 'react-native-extended-stylesheet'
// Components
import WodSubScreen from './WodSubScreen';
// Style Sheet
import { width } from '../../style-sheet';

const getBounds = idx => {
  const multiplier = .5 + idx;
  return {
    lower: width * (multiplier - 1),
    lowerVisible: width * idx,
    upper: width * multiplier,
  }
}

const wodPages = [
  { title: 'This week' },
  { title: 'Past WODs' },
].map((page, i) => {
  const { lower, lowerVisible, upper } = getBounds(i);
  page.lowerScrollBounds = lower;
  page.lowerVisibleBounds = lowerVisible,
  page.upperScrollBounds = upper;
  return page;
});

export default wodPages;
