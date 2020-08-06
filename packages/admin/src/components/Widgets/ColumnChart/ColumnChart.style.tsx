import { styled } from 'baseui';

export const ContentWrapper = styled('div', () => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',

  '@media only screen and (max-width: 990px)': {
    flexDirection: 'column',
  },
}));

export const Legend = styled('div', () => ({
  display: 'flex',
  alignItems: 'center',
}));

export const Label = styled('span', ({ $theme }) => ({
  ...$theme.typography.font13,
  fontFamily: $theme.typography.primaryFontFamily,
  lineHeight: '1.2',
  color: $theme.colors.textNormal,
}));

export const Color = styled('span', () => ({
  width: '15px',
  height: '15px',
  borderRadius: '50%',
  marginRight: '15px',
  display: 'flex',
}));

export const Content = styled('div', () => ({
  display: 'flex',
  flexDirection: 'column',

  '@media only screen and (max-width: 767px)': {
    marginTop: '20px',
  },
}));

export const LabelText = styled('span', ({ $theme }) => ({
  ...$theme.typography.font14,
  fontFamily: $theme.typography.primaryFontFamily,
  lineHeight: '1.2',
  color: $theme.colors.textDark,
  marginTop: '10px',
}));

export const SeriesText = styled('span', ({ $theme }) => ({
  ...$theme.typography.fontBold21,
  fontFamily: $theme.typography.primaryFontFamily,
  lineHeight: '1.2',
  color: '#00C58D',
}));
