import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const SwitchStyle = styled.div`
  /* Switch default style */
  display: inline-flex;
  color: ${themeGet('colors.text.bold', '#0D1136')};
  font-size: calc(${themeGet('fontSizes.base', '15')}px + 1px);
  font-weight: ${themeGet('fontWeights.medium', '500')};

  /* Switch label default style */
  > label .field-label {
    color: inherit;
    font-size: inherit;
    font-weight: inherit;
  }

  /* Switch label style when labelPosition on left */
  &.label_left {
    label {
      display: flex;
      align-items: center;
      .field-label {
        margin-right: 10px;
      }
    }
  }

  /* Switch label style when labelPosition on right */
  &.label_right {
    label {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;

      .field-label {
        margin-left: 10px;
      }
    }
  }

  /* Switch label style when labelPosition on top || bottom */
  &.label_top {
    label {
      .field-label {
        display: flex;
        margin-bottom: 8px;
      }
    }
  }
  &.label_bottom {
    label {
      .field-label {
        display: flex;
        margin-top: 8px;
      }
    }
  }

  /* Switch default style goes here */
  input[type='checkbox'] {
    &.switch {
      opacity: 0;
      position: absolute;
      margin: 0;
      z-index: -1;
      width: 0;
      height: 0;
      overflow: hidden;
      left: 0;
      pointer-events: none;

      &:checked + div {
        width: 36px;
        background-position: 0 0;
        background-color: ${themeGet('colors.primary.alternate', '#028489')};
        > div {
          background-color: ${themeGet('colors.white', '#ffffff')};
          left: calc(38px / 2);
        }
      }
    }
    + div {
      vertical-align: middle;
      width: 36px;
      height: 18px;
      border-radius: 50px;
      background-color: ${themeGet('colors.gray.700', '#e6e6e6')};
      transition-duration: 0.4s;
      transition-property: background-color, box-shadow;
      cursor: pointer;
      box-sizing: border-box;
      position: relative;
      flex-shrink: 0;

      > div {
        float: left;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        pointer-events: none;
        top: 1px;
        left: 1px;
        position: absolute;
        background-color: ${themeGet('colors.white', '#ffffff')};
        transition: all 0.25s ease;
      }
    }
  }
`;

SwitchStyle.displayName = 'SwitchStyle';

export default SwitchStyle;
