// Libraries
import { ScrollView } from 'react-native';
import styled, { css } from '@emotion/native';
import { animated } from 'react-spring';
import { createShouldForwardProp, props } from '@styled-system/should-forward-prop';
// Custom Props
import systemProps from 'theme/system-props.js';

// TODO only keep items I'm usings
export const forwardedProps = [...props, 'cursor', 'd', 'fill', 'stroke', 'transform'];

export const shouldForwardProp = createShouldForwardProp(forwardedProps);

const Scrollview = styled(ScrollView, { shouldForwardProp })(systemProps);

// const AnimatedScrollview = animated(Scrollview);

export default Scrollview;
