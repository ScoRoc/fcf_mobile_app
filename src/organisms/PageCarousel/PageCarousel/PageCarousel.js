// Libraries
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Dimensions } from 'react-native';
import { useSpring } from 'react-spring';
// Atoms
import { AnimatedBox, Box, TouchableIOSOpacity } from 'atoms';
import StyledText from 'atoms/basics/StyledText';
// Organisms
import Carousel from 'organisms/Carousel';

// PageCarousel

const PageCarousel = ({ children, onTitlePress, showSlider, styles, titles, ...props }) => {
  // Dimensions

  const { width } = Dimensions.get('window');

  // State

  const [currentTitle, setCurrentTitle] = useState(titles[0]);
  const [intervals, setIntervals] = useState(children.length);
  const [scrollX, setScrollX] = useState(0); // current scroll x position
  const [scrollToX, setScrollToX] = useState(0); // x position to scroll to
  const [titleDimensions, setTitleDimensions] = useState({});

  // Refs

  const titleRefs = useRef({});

  // Effects

  useEffect(() => {
    setIntervals(children.length);
  }, [children.length]);

  useEffect(() => {
    Object.entries(titleRefs.current).forEach(([key, val]) => {
      val?.measure((x, y, width, height, pageX, pageY) => {
        const newDimensions = titleDimensions;
        newDimensions[key] = { x, y, width, height, pageX, pageY };
        setTitleDimensions(newDimensions);
      });
    });
  }, [titleRefs.current]);

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

    if (currentTitle !== title && isActive) {
      setCurrentTitle(title);
    }

    const handlePress = e => {
      onTitlePress?.({ event: e, index: i, title });
      setScrollToX(width * i);
      setCurrentTitle(title);
    };

    // Style

    // removing custom style objects from RN style object
    const { activeColor, inActiveColor, ...titleTextStyle } = styles.titleTextStyle;

    return (
      <TouchableIOSOpacity key={title} onPress={handlePress} style={styles?.titleTouchableStyle}>
        <StyledText // need ref so much use StyledText, not custom Text component
          color={isActive ? activeColor : inActiveColor}
          fontSize={30}
          marginLeft={10}
          marginRight={10}
          ref={ref => (titleRefs.current[title] = ref)}
          style={titleTextStyle}
        >
          {title}
        </StyledText>
      </TouchableIOSOpacity>
    );
  });

  // Animation

  const springProps = useSpring({
    marginLeft: titleDimensions[currentTitle]?.pageX || 10,
    width: titleDimensions[currentTitle]?.width || 50,
  });

  // Return

  return (
    <Box flex={1} {...props}>
      <Box marginBottom={2}>
        <Box flexDirection='row'>{_titles}</Box>
        {showSlider && (
          <AnimatedBox
            backgroundColor={styles.titleTextStyle.activeColor}
            borderRadius='50%'
            height={3}
            style={springProps}
          />
        )}
      </Box>
      <Carousel
        color='orange'
        contentContainerStyle={{ width: `${100 * children.length}%` }}
        flex={1}
        onScroll={handleScroll}
        scrollViewProps={{ onMomentumScrollEnd: () => setScrollToX(scrollX) }}
        scrollX={scrollToX}
      >
        {children}
      </Carousel>
    </Box>
  );
};

PageCarousel.propTypes = {
  onTitlePress: PropTypes.func,
  showSlider: PropTypes.bool,
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
  onTitlePress: null,
  showSlider: false,
  styles: { titleTextStyle: { activeColor: 'green', inActiveColor: 'black' } },
  titles: null,
};

export default PageCarousel;
