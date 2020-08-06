import styled from 'styled-components';
import css from '@styled-system/css';
import { compose, layout, space, color, border } from 'styled-system';
export const Input = styled.input<any>(
  css({
    display: 'block',
    width: '100%',
    p: '0 18px',
    appearance: 'none',
    fontFamily: 'body',
    fontSize: 'base',
    lineHeight: 'inherit',
    border: '1px solid',
    borderColor: 'gray.500',
    borderRadius: 'base',
    backgroundColor: 'white',
    color: 'text.bold',
    height: '48px',
    transition: 'all 0.25s ease',
    // mb: 3,
    '&:focus': {
      borderColor: 'primary.regular',
    },
  }),
  {
    '&:hover,&:focus': {
      outline: 0,
    },

    '&::placeholder': {
      color: '',
    },
    '&::-webkit-inner-spin-button,&::-webkit-outer-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
    '&.disabled': {
      cursor: 'not-allowed',
      opacity: 0.6,
    },
  },
  compose(layout, space, color, border)
);
