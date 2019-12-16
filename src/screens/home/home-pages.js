// Libraries
import EStyleSheet from 'react-native-extended-stylesheet';
// Components
import EventsScreen from '../events/EventsScreen';
import HomeScreen from './HomeScreen';
// Style Sheet
import { width } from '../../utils/style-sheet';
// String Constants
import { _$ANNOUNCEMENTS, _$EVENTS } from '../../utils/stringConstants';

const getBounds = idx => {
  const multiplier = .5 + idx;
  return {
    lower: width * (multiplier - 1),
    lowerVisible: width * idx,
    upper: width * multiplier,
  }
}

const homePages = [
  {
    component: HomeScreen,
    title: _$ANNOUNCEMENTS,
  },
  {
    component: EventsScreen,
    title: _$EVENTS,
  },
].map((page, i) => {
  const { lower, lowerVisible, upper } = getBounds(i);
  page.lowerScrollBounds = lower;
  page.lowerVisibleBounds = lowerVisible,
  page.upperScrollBounds = upper;
  return page;
});

export default homePages;
