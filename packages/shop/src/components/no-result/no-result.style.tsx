import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const NoResultWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;

  h3 {
    font-size: ${themeGet('fontSizes.xl', '24')}px;
    font-weight: ${themeGet('fontWeights.bold', '700')};
    color: ${themeGet('colors.text.bold', '#0D1136')};
    margin: 0 0 15px;
  }

  p {
    font-size: calc(${themeGet('fontSizes.base', '15')}px + 1px);
    font-weight: ${themeGet('fontWeights.regular', '400')};
    color: ${themeGet('colors.text.regular', '#77798C')};
    margin: 0;
  }
`;

export const ImageWrapper = styled.div`
  margin-top: 50px;
  width: 100%;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 70px;
`;

export const Button = styled.button`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${themeGet('colors.white', '#ffffff')};
  background-color: ${themeGet('colors.primary.regular', '#009e7f')};
  height: 50px;
  border-radius: ${themeGet('radii.base', '6px')};
  font-family: ${themeGet('fonts.body', 'sans-serif')};
  font-size: calc(${themeGet('fontSizes.base', '15')}px + 1px);
  font-weight: ${themeGet('fontWeights.bold', '700')};
  text-decoration: none;
  text-transform: capitalize;
  padding: 0 30px;
  border: 0;
  transition: all 0.3s ease;
`;
