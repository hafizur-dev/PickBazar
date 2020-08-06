import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const ProgressBar = styled('div')`
  width: 100%;
  height: 4px;
  background-color: ${themeGet('colors.gray.700', '#E6E6E6')};
  position: absolute;
  top: 50%;
  left: 0;
  margin-top: -2px;

  @media (max-width: 767px) {
    width: 3px;
    height: 200%;
    left: 50%;
    top: -50%;
    margin-top: 0;
    margin-left: -1px;
  }
`;

const StatusBox = styled('div')`
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.sm', '13')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.primary.regular', '#009E7F')};
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${themeGet('colors.white', '#ffffff')};
  z-index: 1;
  border: 1px dashed ${themeGet('colors.primary.regular', '#009E7F')};
`;

const CheckMarkWrapper = styled.span`
  width: 13px;
  height: 17px;

  svg {
    width: 100%;
  }
`;

const StatusDetails = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 767px) {
    width: 100%;
    align-items: flex-start;
    margin-left: 20px;
  }
`;

const StatusTitle = styled('span')`
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.base', '15')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.text.bold', '#0D1136')};
  text-align: center;
  padding: 0 8px;

  @media (max-width: 767px) {
    padding: 0;
  }
`;

const StatusNote = styled('span')`
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.sm', '13')}px;
  font-weight: ${themeGet('fontWeights.regular', '400')};
  color: ${themeGet('colors.text.regular', '#77798C')};
  margin-top: 8px;
`;

const ProgressBarWrapper = styled('div')`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;

  @media (max-width: 767px) {
    width: auto;
    margin-bottom: 0;
  }

  &.checked {
    ${ProgressBar} {
      background-color: ${themeGet('colors.primary.regular', '#009E7F')};
    }

    ${StatusBox} {
      background-color: ${themeGet('colors.primary.regular', '#009E7F')};
      color: #ffffff;
    }
  }
`;

const ProgressStep = styled('div')`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: row;
    margin-bottom: 30px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &:first-child {
    ${ProgressBar} {
      width: 50%;
      left: 50%;

      @media (max-width: 767px) {
        width: 3px;
        height: 100%;
        top: 50%;
      }
    }
  }

  &:last-child {
    ${ProgressBar} {
      width: 50%;

      @media (max-width: 767px) {
        width: 3px;
        height: 100%;
        top: -50%;
      }
    }
  }
`;

export {
  ProgressBarWrapper,
  ProgressStep,
  ProgressBar,
  StatusBox,
  StatusTitle,
  StatusDetails,
  StatusNote,
  CheckMarkWrapper,
};
