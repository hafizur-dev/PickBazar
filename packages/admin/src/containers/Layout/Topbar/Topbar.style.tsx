import { styled } from 'baseui';
import { NavLink as RRNavLink } from 'react-router-dom';

export const NotificationIconWrapper = styled('div', ({ $theme }) => ({
  display: 'flex',
  position: 'relative',
  margin: '0 45px',
  cursor: 'pointer',

  '@media only screen and (max-width: 767px)': {
    margin: '0 20px',
  },

  '@media only screen and (min-width: 768px) and (max-width: 991px)': {
    margin: '0 30px',
  },
}));

export const AlertDot = styled('div', ({ $theme }) => ({
  color: $theme.colors.lightGreen,
  position: 'absolute',
  top: '-4px',
  right: '-2px',
  display: 'flex',
}));

export const TopbarWrapper = styled('div', () => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '#fff',
  padding: '30px 60px',
  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.06)',
  position: 'relative',

  '@media only screen and (max-width: 767px)': {
    padding: '20px',
  },

  '@media only screen and (max-width: 1440px)': {
    padding: '20px 45px',
  },
}));

export const Logo = styled('div', () => ({
  marginRight: 'auto',
  cursor: 'pointer',

  '@media only screen and (max-width: 1199px)': {
    display: 'none',
  },
}));

export const DrawerIcon = styled('div', ({ $theme }) => ({
  color: $theme.colors.textDark,
  cursor: 'pointer',
}));

export const LogoImage = styled('img', () => ({
  display: 'block',
  backfaceVisibility: 'hidden',
  maxWidth: '150px',
}));

export const TopbarRightSide = styled('div', () => ({
  display: 'flex',
  alignItems: 'center',
}));

export const ProfileImg = styled('div', () => ({
  width: '40px',
  height: '40px',
  display: 'flex',
  borderRadius: '50%',
  border: '2px solid #ffffff',
  overflow: 'hidden',
  cursor: 'pointer',
  flexShrink: '0',
}));

export const Image = styled('img', () => ({
  width: '100%',
  height: '100%',
}));

export const UserDropdowItem = styled('div', () => ({
  display: 'flex',
  flexDirection: 'column',
}));

export const NavLink = styled(RRNavLink, ({ $theme }) => ({
  fontSize: '16px',
  fontWeight: '700',
  color: $theme.colors.textNormal,
  lineHeight: '1.2em',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  margin: '0',
  padding: '16px 20px',
  borderBottom: `1px solid ${$theme.colors.backgroundF7}`,
  transition: '0.15s ease-in-out',
  cursor: 'pointer',

  ':hover': {
    color: $theme.colors.primary,
  },
}));

export const LogoutBtn = styled('button', ({ $theme }) => ({
  fontSize: '16px',
  fontWeight: '700',
  color: $theme.colors.textNormal,
  backgroundColor: 'transparent',
  lineHeight: '1.2em',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  margin: '0',
  padding: '16px 20px',
  border: '0',
  outline: '0',
  transition: '0.15s ease-in-out',
  cursor: 'pointer',
  ':hover': {
    color: $theme.colors.primary,
  },
}));

export const CloseButton = styled('button', ({ $theme }) => ({
  color: $theme.colors.textNormal,
  backgroundColor: 'transparent',
  outline: '0',
  border: 'none',
  padding: '0',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  top: '20px',
  right: '30px',
  cursor: 'pointer',
}));

export const DrawerWrapper = styled('div', ({ $theme }) => ({
  '@media only screen and (min-width: 1200px)': {
    display: 'none',
  },
}));
