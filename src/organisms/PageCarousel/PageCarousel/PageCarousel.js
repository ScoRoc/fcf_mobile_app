// Libraries
import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import PropTypes from 'prop-types';
// Atoms
import { Box, Text, TouchableIOSOpacity } from 'atoms';
// Organisms
import Carousel from 'organisms/Carousel';

// PageCarousel

const PageCarousel = ({ children, onTitlePress, titles, styles, ...props }) => {
  // Dimensions

  const { width } = Dimensions.get('window');

  // State

  const [intervals, setIntervals] = useState(children.length);
  const [scrollX, setScrollX] = useState(0);
  const [scrollToX, setScrollToX] = useState(0);

  // Effects

  useEffect(() => {
    setIntervals(children.length);
  }, [children.length]);

  // Functions

  const handleScroll = ({ currentInterval, event }) => {
    setScrollX(event.nativeEvent.contentOffset.x);
  };

  // Titles

  const _titles = titles.map((title, i) => {
    const halfPageWidth = width / 2;
    const nextPageOffset = width * (i + 1) - halfPageWidth;
    const prevPageOffset = width * i - halfPageWidth;

    const isActive = scrollX > prevPageOffset && scrollX < nextPageOffset;

    const handlePress = e => {
      onTitlePress?.({ event: e, index: i, title });
      setScrollToX(width * i);
    };

    // Style

    // removing custom style objects from RN style object
    const { activeColor, inActiveColor, ...titleTextStyle } = styles.titleTextStyle;

    return (
      <TouchableIOSOpacity key={title} onPress={handlePress} style={styles?.titleTouchableStyle}>
        <Text
          color={isActive ? activeColor : inActiveColor}
          fontSize={30}
          marginLeft={10}
          marginRight={10}
          style={titleTextStyle}
        >
          {title}
        </Text>
      </TouchableIOSOpacity>
    );
  });

  // Return

  return (
    <Box flex={1} {...props}>
      {/* <Box flexDirection='row' style={styles.titleContainerStyle || {}}> */}
      <Box flexDirection='row'>{_titles}</Box>
      <Carousel
        color='orange'
        contentContainerStyle={{ width: `${100 * children.length}%` }}
        flex={1}
        onScroll={handleScroll}
        scrollX={scrollToX}
      >
        {children}
      </Carousel>
    </Box>
  );
};

PageCarousel.propTypes = {
  onTitlePress: PropTypes.func,
  // have to comment out bc RN thinks this is required
  // styles: PropTypes.shape({
  // titleContainerStyle: PropTypes.object, // valid View style object
  // titleTextStyle: PropTypes.shape({
  //   activeColor: PropTypes.string, // valid color string
  //   inActiveColor: PropTypes.string, // valid color string
  //   ...PropTypes.object, // valid style object
  // }),
  // titleTouchableStyle: PropTypes.object, // valid Touchable viewStyle object
  // }),
  titles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

PageCarousel.defaultProps = {
  children: null,
  onTitlePress: null,
  styles: { titleTextStyle: { activeColor: 'green', inActiveColor: 'black' } },
  titles: null,
};

export default PageCarousel;
