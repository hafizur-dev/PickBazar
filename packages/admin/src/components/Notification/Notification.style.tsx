import { styled } from 'baseui';

const getTitleStyle = ({ $theme }) => {
  return $theme.typography.fontBold14;
};

const getTimeStyle = ({ $theme }) => {
  return $theme.typography.font14;
};

const getHeadingStyle = ({ $theme }) => {
  return $theme.typography.fontBold18;
};

const getClearStyle = ({ $theme }) => {
  return $theme.typography.fontBold14;
};

const getDetailsStyle = ({ $theme }) => {
  return $theme.typography.font14;
};

export const Header = styled('div', ({ $theme }) => ({
  padding: '15px 30px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: '1px solid #E6E6E6',
}));

export const Heading = styled('span', ({ $theme }) => ({
  fontFamily: $theme.typography.primaryFontFamily,
  color: $theme.colors.textDark,
  ...getHeadingStyle({ $theme }),
}));

export const ClearAll = styled('button', ({ $theme }) => ({
  outline: '0',
  border: 'none',
  padding: '0',
  backgroundColor: 'transparent',
  fontFamily: $theme.typography.primaryFontFamily,
  color: $theme.colors.red400,
  cursor: 'pointer',
  ...getClearStyle({ $theme }),
}));

export const Body = styled('div', ({ $theme }) => ({
  padding: '0 30px',
  display: 'flex',
  flexDirection: 'column',
}));

export const Message = styled('div', ({ $theme }) => ({
  padding: '20px 0',
  display: 'flex',
  flexDirection: 'column',
  borderBottom: `1px solid ${$theme.colors.borderF1}`,
  cursor: 'pointer',
  ':last-child': {
    borderBottom: '0',
  },
}));

export const TitleWrapper = styled('div', () => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  marginBottom: '5px',
}));

export const Dot = styled('span', ({ $theme }) => ({
  display: 'flex',
  width: '4px',
  height: '4px',
  borderRadius: '2px',
  backgroundColor: $theme.colors.greyE6,
  margin: '0 10px',
}));

export const Title = styled('span', ({ $theme }) => ({
  fontFamily: $theme.typography.primaryFontFamily,
  color: $theme.colors.textDark,
  ...getTitleStyle({ $theme }),
}));

export const Time = styled('span', ({ $theme }) => ({
  fontFamily: $theme.typography.primaryFontFamily,
  color: $theme.colors.textNormal,
  ...getTimeStyle({ $theme }),
}));

export const Details = styled('p', ({ $theme }) => ({
  margin: '0',
  fontFamily: $theme.typography.primaryFontFamily,
  color: $theme.colors.textNormal,
  ...getDetailsStyle({ $theme }),
}));

export const Footer = styled('div', ({ $theme }) => ({
  padding: '15px 30px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderTop: `1px solid ${$theme.colors.borderE6}`,
}));

export const FeedsButton = styled('button', ({ $theme }) => ({
  outline: '0',
  border: 'none',
  padding: '0',
  backgroundColor: 'transparent',
  fontFamily: $theme.typography.primaryFontFamily,
  color: $theme.colors.primary,
  cursor: 'pointer',
  ...getClearStyle({ $theme }),
}));
