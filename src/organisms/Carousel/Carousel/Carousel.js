// Libraries
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// Atoms
import { Box, Scrollview, Text } from 'atoms';

// Carousel

const Carousel = ({ children, contentContainerStyle, scrollViewProps, showBullets, ...props }) => {
  // State

  const [interval, setInterval] = useState(1);
  const [intervals, setIntervals] = useState(children.length || 1);
  const [width, setWidth] = useState(1);

  // Functions

  const handleScroll = e => {
    const getInterval = offset => {
      for (let i = 1; i <= intervals; i++) {
        if (offset < (width / intervals) * i) {
          return i;
        }
        if (i === intervals) {
          return i;
        }
      }
    };
    setInterval(getInterval(e.nativeEvent.contentOffset.x));
    props?.onScroll?.(e);
  };

  const handleContentSizeChange = (_width, _height) => {
    setWidth(_width);
    setIntervals(children.length);
    props?.onContentSizeChange?.(_width, _height);
  };

  const buildBullets = ({ intervals }) => {
    let bullets = [];
    for (let i = 1; i <= intervals; i++) {
      bullets.push(
        <Text fontSize={20} key={i} opacity={interval === i ? 0.5 : 0.1}>
          &bull;
        </Text>,
      );
    }
    return bullets;
  };

  // Variables

  const bullets = buildBullets({ intervals });

  // Return

  return (
    <Box {...props}>
      <Scrollview
        contentContainerStyle={{
          width: `${100 * intervals}%`,
          ...contentContainerStyle,
        }}
        decelerationRate='fast'
        horizontal
        onContentSizeChange={handleContentSizeChange}
        onScroll={handleScroll}
        pagingEnabled
        scrollEventThrottle={200}
        showsHorizontalScrollIndicator={false}
        {...scrollViewProps}
      >
        {children}
      </Scrollview>

      {showBullets && (
        <Box alignItems='center' flexDirection='row' justifyContent='center'>
          {bullets}
        </Box>
      )}
    </Box>
  );
};

Carousel.propTypes = {
  contentContainerStyle: PropTypes.object, // valid ScrollView contentContainerStyle object
  scrollViewProps: PropTypes.object, // object containing any ScrollView props
  showBullets: PropTypes.bool,
};

Carousel.defaultProps = {
  contentContainerStyle: null,
  scrollViewProps: null,
  showBullets: false,
};

export default Carousel;
