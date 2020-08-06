import { styled } from 'baseui';

export const ChartLabels = styled('div', () => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
}));

export const Img = styled('span', () => ({
  width: '56px',
  height: '56px',
  marginRight: '15px',
  display: 'flex',
}));

export const Content = styled('div', () => ({
  display: 'flex',
  flexDirection: 'column',
}));

export const LabelText = styled('span', ({ $theme }) => ({
  ...$theme.typography.font13,
  fontFamily: $theme.typography.primaryFontFamily,
  lineHeight: '1.2',
  color: $theme.colors.textNormal,
  marginTop: '10px',
}));

export const SeriesText = styled('span', ({ $theme }) => ({
  ...$theme.typography.fontBold21,
  fontFamily: $theme.typography.primaryFontFamily,
  lineHeight: '1.2',
  color: $theme.colors.textDark,
}));
