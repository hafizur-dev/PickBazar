import styled from 'styled-components';
import { compose, space, color, layout } from 'styled-system';

export const Box = styled.div<any>(
  {
    boxSizing: 'border-box',
    minWidth: 0,
    margin: 0,
  },
  compose(space, color, layout)
);
