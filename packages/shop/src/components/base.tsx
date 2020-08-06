/** this is our Base Component every components must be Extend it */
import {
  space,
  borders,
  borderColor,
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
  display,
  fontSize,
  flex,
  order,
  alignSelf,
  color,
  compose,
} from 'styled-system';

export const themed = (key: any) => (props: any) => props.theme[key];

export const base = compose(
  () => ({ boxSizing: 'border-box' }),
  space,
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
  fontSize,
  color,
  flex,
  order,
  alignSelf,
  borders,
  borderColor,
  display
);
