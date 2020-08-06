import { styled } from 'baseui';

export const UserDetailsWrapper = styled('div', () => ({}));

export const InfoCard = styled('div', ({ $theme }) => ({
  padding: '35px 0',
  borderBottom: `1px solid ${$theme.colors.borderE6}`,

  ':last-child': {
    paddingBottom: 0,
    borderBottom: 0,
  },
}));

export const InfoCardTitle = styled('h5', ({ $theme }) => ({
  ...$theme.typography.fontBold14,
  margin: '0 0 15px',
  color: $theme.colors.textDark,
}));

export const InfoCardDetails = styled('p', ({ $theme }) => ({
  ...$theme.typography.font14,
  margin: '0 0 9px',
  color: $theme.colors.textDark,

  ':last-child': {
    marginBottom: '0',
  },
}));

export const InfoCardTag = styled('span', ({ $theme }) => ({
  ...$theme.typography.fontBold14,
  marginLeft: '10px',
  color: $theme.colors.blue400,
}));
