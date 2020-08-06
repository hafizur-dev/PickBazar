import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -15px;

  .addCard {
    font-family: ${themeGet('fonts.body', 'sans-serif')};
    font-size: ${themeGet('fontSizes.sm', '13')}px;
    font-weight: ${themeGet('fontWeights.bold', '700')};
    color: ${themeGet('colors.primary.regular', '#009e7f')};
  }
`;
export const PaymentCardList = styled.div`
  margin-top: 15px;
  margin-left: -10px;
  margin-right: -10px;
  position: relative;
  @media (max-width: 500px) {
    flex-direction: column;
  }

  .prevButton {
    left: -10px;
  }

  .nextButton {
    right: -10px;
  }

  @media (max-width: 500px) {
    .prevButton {
      left: -10px;
    }

    .nextButton {
      right: -10px;
    }
  }
`;

export const IconWrapper = styled.span`
  margin-right: 6px;
`;

export const SavedCard = styled.span`
  font-family: ${themeGet('fonts.body', 'sans-serif')};
  font-size: ${themeGet('fontSizes.sm', '13')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.primary.regular', '#009e7f')};
  display: block;
`;

export const Arrow = styled.button`
  width: 30px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.25);
  border: 0;
  outline: 0;
  box-shadow: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${themeGet('colors.white', '#ffffff')};
  position: absolute;
  top: 50%;
  margin-top: -15px;
  padding: 0;
  border-radius: 50%;

  &.arrowLeft {
    left: 10px;
  }

  &.arrowRight {
    right: 10px;
  }
`;

export const AddCard = styled.div`
  flex: 105px;
  max-width: 105px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;

  @media (max-width: 500px) {
    margin-top: 15px;
  }

  .reusecore__button {
    flex-grow: 1;
    height: auto;
    border: 1px dashed ${themeGet('colors.gray.500', '#f1f1f1')};
    border-radius: ${themeGet('radii.base', '6px')};
    padding: 0 5px;
    flex-direction: column;
    svg {
      width: 18px;
      height: auto;
    }
    .btn-icon {
      margin-bottom: 5px;
    }
    &:hover {
      border-color: ${themeGet('colors.primary.regular', '#009e7f')};
    }
  }
  .safe-label {
    font-family: ${themeGet('fonts.body', 'sans-serif')};
    font-size: ${themeGet('fontSizes.sm', '13')}px;
    font-weight: ${themeGet('fontWeights.bold', '700')};
    color: ${themeGet('colors.text.regular', '#77798C')};
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 10px;
    > svg {
      fill: currentColor;
      margin-right: 4px;
    }
  }
`;

export const OtherPayOption = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: stretch;

  .other-pay-radio {
    flex-grow: 1;
    flex: 50%;
    max-width: 50%;

    span {
      display: block;
      border-radius: ${themeGet('radii.base', '6px')};
      background-color: ${themeGet('colors.gray.200', '#F7F7F7')};
      border: 1px solid ${themeGet('colors.gray.200', '#F7F7F7')};
      text-align: center;
      padding: 12px 20px;
      cursor: pointer;
      color: ${themeGet('colors.text.bold', '#0D1136')};
      font-size: calc(${themeGet('fontSizes.base', '15')}px - 1px);
      line-height: 24px;
      font-weight: ${themeGet('fontWeights.bold', '700')};
      -webkit-transition: all 0.25s ease;
      transition: all 0.25s ease;
    }
    input {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      &:checked {
        & ~ span {
          border-color: ${themeGet('colors.primary.regular', '#009e7f')};
          background-color: ${themeGet('colors.white', '#ffffff')};
        }
      }
    }
    &.cash-on-delivery {
      margin-left: 15px;
    }
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  outline: 0;
  padding: 0;
  color: ${themeGet('colors.white', '#ffffff')};
  background-color: ${themeGet('colors.secondary.regular', '#ff5b60')};
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 9;
  opacity: 0;
  transition: 0.2s ease-in-out;

  svg {
    display: block;
    width: 8px;
    height: auto;
  }
`;
