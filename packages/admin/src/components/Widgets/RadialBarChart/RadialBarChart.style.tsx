import { styled } from 'baseui';

export const ChartLabels = styled('div', () => ({
  width: '100%',
  padding: '15px 10px 30px',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'flex-start',
}));

export const Label = styled('div', () => ({
  padding: '0 10px',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
}));

export const Color = styled('span', () => ({
  width: '15px',
  height: '15px',
  borderRadius: '50%',
  marginRight: '10px',
  display: 'flex',
  flexShrink: '0',
}));

export const Content = styled('div', () => ({
  display: 'flex',
  flexDirection: 'column',
}));

export const Title = styled('span', ({ $theme }) => ({
  ...$theme.typography.font13,
  fontFamily: $theme.typography.primaryFontFamily,
  lineHeight: '1.2',
  color: $theme.colors.textNormal,
  marginBottom: '10px',
}));

export const Text = styled('span', ({ $theme }) => ({
  ...$theme.typography.fontBold21,
  fontFamily: $theme.typography.primaryFontFamily,
  lineHeight: '1.2',
  color: $theme.colors.textDark,
}));
