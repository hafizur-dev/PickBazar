import styled from 'styled-components';
import css from '@styled-system/css';
import { layout, space, color, compose } from 'styled-system';

export const Label = styled.label(
  css({
    fontSize: 'base',
    fontWeight: 'bold',
    color: 'text.bold',
    lineHeight: '19px',
    mb: '15px',
    display: 'flex',
  }),
  compose(color, space, layout)
);
