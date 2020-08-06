import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { Button } from 'components/button/button';

export const Wrapper = styled.div`
  text-align: center;
  background-color: ${themeGet('colors.white', '#ffffff')};
`;
export const Container = styled.div`
  padding: 60px 60px 45px;

  @media (max-width: 768px) {
    padding: 40px 30px;
  }
`;

export const LogoWrapper = styled.div`
  margin-bottom: 30px;

  img {
    max-width: 160px;
  }
`;
export const Heading = styled.h3`
  color: ${themeGet('colors.primary.regular', '#009e7f')};
  margin-bottom: 10px;
  font-family: ${themeGet('fonts.heading', 'sans-serif')};
  font-size: ${themeGet('fontSizes.lg', '21')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
`;

export const SubHeading = styled.span`
  margin-bottom: 30px;
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.base', '15')}px;
  font-weight: ${themeGet('fontWeights.regular', '400')};
  color: ${themeGet('colors.text.regular', '#77798c')};
  display: block;
  line-height: 1.5;
`;
export const OfferSection = styled.div`
  padding: 20px;
  background-color: ${themeGet('colors.gray.200', '#f7f7f7')};
  color: ${themeGet('colors.primary.regular', '#009e7f')};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Offer = styled.p`
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.base', '15')}px;
  font-weight: ${themeGet('fontWeights.regular', '400')};
  color: ${themeGet('colors.text.regular', '#77798c')};
  margin: 0;
  margin-left: 10px;
`;
export const Input = styled.input`
  width: 100%;
  height: 48px;
  border-radius: ${themeGet('radii.base', '6px')};
  background-color: ${themeGet('colors.gray.200', '#f7f7f7')};
  border: 1px solid ${themeGet('colors.gray.200', '#f7f7f7')};
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.base', '15')}px;
  font-weight: ${themeGet('fontWeights.regular', '400')};
  color: ${themeGet('colors.text.bold', '#0D1136')};
  line-height: 19px;
  padding: 0 18px;
  box-sizing: border-box;
  transition: border-color 0.25s ease;
  margin-bottom: 20px;
  text-align: center;

  &:hover,
  &:focus {
    outline: 0;
  }

  &:focus {
    border-color: ${themeGet('colors.primary.regular', '#009e7f')};
  }

  &::placeholder {
    color: ${themeGet('colors.text.regular', '#77798c')};
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &.disabled {
    .inner-wrap {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }
`;

// export const Button = styled(Buttons)`
//   border-radius: ${themeGet('radii.base', '6px')};
// `;
export { Button };
