import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const DropdownWrapper = styled.div`
  position: relative;

  .dropdown-handler {
    width: auto;
    height: auto;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${themeGet('radii.base', '6px')};
    cursor: pointer;
    transition: all 0.35s ease-in-out;

    &.active {
      background-color: ${themeGet('colors.gray.200', '#f7f7f7')};
    }
  }

  .dropdown-content {
    top: calc(100% + 5px);
    left: 0;
    right: auto;
    display: inline-block;
    min-width: 200px;
    position: absolute;
    border-radius: 6px;
    background-color: ${themeGet('colors.white', '#ffffff')};
    box-shadow: ${themeGet('shadows.medium', '0 6px 12px rgba(0, 0, 0, 0.16)')};
    z-index: 99;
  }

  /* If direction prop set to right */
  &.right {
    .dropdown-content {
      left: auto;
      right: 0;
    }

    .dropdown-handler {
      margin-left: auto;
    }
  }
`;

export default DropdownWrapper;
