import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const RadioGroupWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  label {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: ${themeGet('radii.base', '6px')};
    background-color: ${themeGet('colors.gray.200', '#F7F7F7')};
    border: 1px solid ${themeGet('colors.gray.200', '#F7F7F7')};
    text-align: center;
    padding: 15px 20px;
    position: relative;
    font-family: ${themeGet('fonts.body', 'Lato')};
    font-size: ${themeGet('fontSizes.sm', '13')}px;
    font-weight: ${themeGet('fontWeights.regular', '400')};
    color: ${themeGet('colors.text.bold', '#0D1136')};
    font-size: calc(${themeGet('fontSizes.base', '15')}px - 1px);
    line-height: 24px;
    max-width: 240px;
    cursor: pointer;
    width: 100%;
    transition: all 0.25s ease;

    &.active {
      border: 1px solid ${themeGet('colors.primary.regular', '#009e7f')};
      background-color: ${themeGet('colors.white', '#ffffff')};
    }

    &.disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }

    &.item-has-title {
      flex-direction: column;
      text-align: left;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 15px;
    }

    &:last-child {
      margin-right: 0;
    }

    input[type='radio']:checked & label {
      opacity: 0;
      visibility: hidden;
      position: absolute;
      top: 0;
      left: 0;
    }

    &:hover {
      .button-wrapper {
        opacity: 1;
        visibility: visible;
      }
    }
  }
`;

export const RadioTitle = styled.h3`
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.base', '15')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.text.bold', '#0D1136')};
  line-height: 1.2;
  margin-bottom: 5px;
`;

export const ButtonWrapper = styled.span`
  display: block;
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  transition: 0.2s ease-in-out;
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  overflow: hidden;
  margin-left: 5px;
  cursor: pointer;
  outline: 0;
  padding: 0;
  color: ${themeGet('colors.white', '#ffffff')};

  &.edit-btn {
    background-color: ${themeGet('colors.primary.regular', '#009e7f')};
  }
  &.close-btn {
    background-color: ${themeGet('colors.secondary.regular', '#ff5b60')};
  }

  svg {
    display: block;
    width: 8px;
    height: auto;
  }
`;

RadioGroupWrapper.displayName = 'RadioGroupWrapper';

export default RadioGroupWrapper;
