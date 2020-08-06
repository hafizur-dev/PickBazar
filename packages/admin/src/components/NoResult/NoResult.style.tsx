import { styled } from 'baseui';

export const NoResultWrapper = styled('div', () => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '50px 20px',

  h3: {
    fontSize: '24px',
    fontWeight: 700,
    color: '#161f6a',
    margin: '0 0 15px',
  },

  p: {
    fontSize: '16px',
    fontWeight: 400,
    color: '#707070',
    margin: 0,
  },
}));

export const ImageWrapper = styled('div', () => ({
  marginTop: '50px',
  width: '100%',
  maxWidth: '600px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    maxWidth: '100%',
  },
}));

export const ButtonWrapper = styled('div', () => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  marginTop: '70px',
}));

export const Button = styled('button', () => ({
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#ffffff',
  backgroundColor: '#009e7f',
  height: '50px',
  borderRadius: '3px',
  fontFamily: `'Lato', sans-serif`,
  fontSize: '16px',
  fontWeight: 700,
  textDecoration: 'none',
  textTransform: 'capitalize',
  padding: '0 30px',
  border: 0,
  transition: 'all 0.3s ease',
}));
