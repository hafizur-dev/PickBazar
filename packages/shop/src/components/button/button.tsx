import React from 'react';
import styled, { keyframes } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import css from '@styled-system/css';
import { compose, variant, border, space, layout } from 'styled-system';

export const StyledButton = styled.button(
  (props) =>
    css({
      px: '15px',
      py: 0,
      fontSize: ['base'],
      fontWeight: 'bold',
      cursor: props.disabled ? 'not-allowed' : 'pointer',
      color: props.disabled ? 'text.light' : 'white',
      bg: props.disabled ? 'gray.500' : 'primary.regular',
      transition: 'all 0.3s ease',
      borderRadius: 'base',

      '&:hover': {
        color: props.disabled ? 'text.light' : 'white',
        bg: props.disabled ? 'gray.500' : 'primary.hover',
      },
    }),
  {
    appearance: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    textAlign: 'center',
    height: '38px',
    textDecoration: 'none',
    fontFamily: 'inherit',
    border: 0,

    '&:focus': {
      outline: 'none',
    },
  },
  variant({
    variants: {
      outlined: {
        color: 'primary.regular',
        bg: 'white',
        border: '1px solid',
        borderColor: 'gray.500',
        '&:hover': {
          borderColor: 'primary.regular',
          color: 'primary.regular',
          bg: 'white',
        },
      },
      primary: {
        color: 'white',
        bg: 'primary.regular',
        '&:hover': {
          bg: 'primary.hover',
        },
      },
      secondary: {
        color: 'primary.regular',
        bg: 'white',
        border: '2px solid',
        borderColor: 'gray.500',
        '&:hover': {
          color: 'white',
          bg: 'primary.regular',
          borderColor: 'primary.regular',
        },
      },
      text: {
        color: 'primary.regular',
        bg: 'transparent',
        '&:hover': {
          bg: 'transparent',
          color: 'primary.hover',
        },
      },
      select: {
        width: 26,
        height: 26,
        lineHeight: 1,
        flexShrink: 0,
        border: '1px solid',
        borderColor: 'text.regular',
        borderRadius: 13,
        padding: 0,
        color: 'text.bold',
        bg: 'transparent',
        '&.selected': {
          bg: 'primary.regular',
          color: 'white',
          borderColor: 'primary.regular',
        },
        '&:hover:not(.selected)': {
          bg: 'transparent',
          color: 'primary.regular',
          borderColor: 'primary.regular',
        },
      },
    },
  }),
  variant({
    prop: 'size',
    variants: {
      big: {
        height: '48px',
        px: 30,
      },
      small: {
        height: '30px',
        fontSize: 14,
      },
    },
  }),
  compose(border, space, layout)
);
const rotate = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
`;

const Spinner = styled.div`
  width: 18px;
  height: 18px;
  margin-left: 10px;
  border: 3px solid #ffffff;
  border-top: 3px solid
    ${(props) =>
      props.color ? props.color : themeGet('primary.regular', '#009E7F')};
  border-radius: 50%;
  transition-property: transform;
  animation-name: ${rotate};
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

// const Spinner = styled.div((props) =>
//   css({
//     width: 18,
//     height: 18,
//     marginLeft: 10,
//     border: '3px solid white',
//     borderTop: `3px solid ${props.color ? props.color : 'primary.regular'}`,
//     borderRadius: '50%',
//     transitionProperty: 'transform',
//     animationName: `${rotate}`,
//     animationDuration: '1.2s',
//     animationIterationCount: 'infinite',
//     animationTimingFunction: 'linear',
//   })
// );

type Props = {
  children: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  type: 'submit' | 'button';
  [key: string]: unknown;
};
export type Ref = HTMLButtonElement;
export const Button = React.forwardRef<Ref, Props>(
  ({ children, disabled, loading = false, ...props }, ref) => (
    <StyledButton ref={ref} {...props} disabled={disabled}>
      {children}
      {loading && <Spinner />}
    </StyledButton>
  )
);
