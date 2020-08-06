import { styled, withStyle } from 'baseui';
import {
  StyledTable as BaseStyledTable,
  StyledHeadCell as BaseStyledHeadCell,
  StyledBodyCell as BaseStyledCell,
} from 'baseui/table-grid';

export const Status = styled('div', ({ $theme }) => ({
  ...$theme.typography.fontBold14,
  color: $theme.colors.textDark,
  display: 'flex',
  alignItems: 'center',
  lineHeight: '1',
  textTransform: 'capitalize',

  ':before': {
    content: '""',
    width: '10px',
    height: '10px',
    display: 'inline-block',
    borderRadius: '10px',
    backgroundColor: $theme.borders.borderE6,
    marginRight: '10px',
  },
}));

export const TableWrapper = styled('div', () => ({
  width: '100%',
  height: '450px',
}));

export const StyledTable = withStyle(BaseStyledTable, () => ({
  borderTopLeftRadius: '0 !important',
  borderTopRightRadius: '0 !important',
  borderBottomLeftRadius: '0 !important',
  borderBottomRightRadius: '0 !important',
  alignContent: 'start',
}));

export const StyledHeadCell = withStyle(BaseStyledHeadCell, () => ({
  fontFamily: "'Lato', sans-serif",
  fontWeight: 700,
  color: '#161F6A !important',
  alignItems: 'center',
  boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
  borderTopColor: 'rgba(0, 0, 0, 0.12)',
  borderRightColor: 'rgba(0, 0, 0, 0.12)',
  borderBottomColor: 'rgba(0, 0, 0, 0.12)',
  borderLeftColor: 'rgba(0, 0, 0, 0.12)',
  alignSelf: 'start',
  zIndex: 1,
}));

export const StyledBodyCell = withStyle(BaseStyledCell, () => ({
  fontFamily: "'Lato', sans-serif",
  fontWeight: 400,
  color: '#161F6A !important',
  alignSelf: 'center',
}));

export const ProgressWrapper = styled('div', () => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
}));

export const ProgressText = styled('span', ({ $theme }) => ({
  ...$theme.typography.font13,
  fontFamily: $theme.typography.primaryFontFamily,
  lineHeight: '1.2',
  color: $theme.colors.textDark,
}));
