// Libraries
import { Image } from 'react-native';
import styled, { css } from '@emotion/native';
import { animated } from 'react-spring';
import { createShouldForwardProp, props } from '@styled-system/should-forward-prop';
// Custom Props
import systemProps from 'theme/system-props.js';

// TODO only keep items I'm usings
export const forwardedProps = [...props, 'cursor', 'd', 'fill', 'stroke', 'transform'];

export const shouldForwardProp = createShouldForwardProp(forwardedProps);

const Img = styled(Image, { shouldForwardProp })(
  // { className: 'Img' },
  (
    { custonPropName }, // write your own prop name and styles associated with it
  ) =>
    custonPropName &&
    css`
      padding-left: 50px;
      color: blue;

      &:hover {
        color: green;
      }
    `,
  systemProps,
);

const AnimatedImg = animated(Img);

export { AnimatedImg, Img };
