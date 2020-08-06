import styled, { keyframes } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    opacity: 0;
    transition: all 0.3s ease;
  }
`;

const hideSearch = keyframes`
  from {
    display: none;
  }

  to {
    display: flex;
  }
`;

export const SearchWrapper = styled.div`
  padding: 5px;
  cursor: pointer;
  color: ${themeGet('colors.text.bold', '#0D1136')};
  svg {
    display: block;
    width: 17px;
    height: auto;
  }

  @media only screen and (min-width: 991px) and (max-width: 1366px) {
    opacity: 0;
  }
`;

const HeaderWrapper = styled.header`
  /* padding: 30px 60px; */
  padding: 20px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${themeGet('colors.white', '#ffffff')};
  box-shadow: ${themeGet('shadows.header', '0 1px 2px rgba(0, 0, 0, 0.06)')};
  transition: all 0.3s ease;
  &.home {
    position: absolute;
    background-color: transparent;
    box-shadow: none;
  }

  @media (min-width: 1600px) {
    padding: 25px 40px;
  }

  @media (max-width: 990px) {
    display: none;
  }

  .headerSearch {
    margin: 0 30px;

    @media only screen and (min-width: 991px) and (max-width: 1200px) {
      margin: 0 15px;

      input {
        width: 80%;
      }

      .buttonText {
        display: none;
      }
    }
  }

  &.unSticky {
    animation: ${positionAnim} 0.3s ease;
    .headerSearch {
      animation: ${hideSearch} 0.3s ease;
      display: none;
    }
  }

  &.sticky {
    background-color: ${themeGet('colors.white', '#ffffff')};
    position: fixed;
    box-shadow: ${themeGet('shadows.header', '0 1px 2px rgba(0, 0, 0, 0.06)')};
    padding-top: 20px;
    padding-bottom: 20px;

    @media (max-width: 1400px) {
      padding-top: 20px;
      padding-bottom: 20px;
    }

    .headerSearch {
      display: flex;

      form {
        background-color: ${themeGet('colors.gray.400', '#F3F3F3')};

        input {
          background-color: ${themeGet('colors.gray.400', '#F3F3F3')};
        }
      }

      @media only screen and (min-width: 991px) and (max-width: 1200px) {
        .buttonText {
          display: none;
        }
      }
    }
  }

  .popover-wrapper {
    .popover-content {
      padding: 20px 0;

      .menu-item {
        a {
          margin: 0;
          padding: 12px 30px;
          border-bottom: 1px solid ${themeGet('colors.gray.200', '#F7F7F7')};
          cursor: pointer;
          white-space: nowrap;

          &:last-child {
            border-bottom: 0;
          }
          &:hover {
            color: ${themeGet('colors.primary.regular', '#009e7f')};
          }
          &.current-page {
            color: ${themeGet('colors.primary.regular', '#009e7f')};
          }

          .menu-item-icon {
            margin-right: 15px;
          }
        }
      }
    }
  }

  .headerSearch {
    input {
      @media (max-width: 1400px) {
        padding: 0 15px;
        font-size: ${themeGet('fontSizes.base', '15')}px;
      }

      @media only screen and (min-width: 991px) and (max-width: 1200px) {
      }
    }
    button {
      @media (max-width: 1400px) {
        padding: 0 15px;
        font-size: ${themeGet('fontSizes.base', '15')}px;
      }
    }
  }
`;

export const HeaderLeftSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
`;

export const HeaderRightSide = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  .menu-icon {
    min-width: 14px;
    margin-right: 7px;
  }

  .menu-item {
    a {
      font-family: ${themeGet('fonts.body', 'Lato')};
      font-size: ${themeGet('fontSizes.base', '15')}px;
      font-weight: ${themeGet('fontWeights.bold', '700')};
      color: ${themeGet('colors.text.bold', '#0D1136')};
      line-height: 1.2em;
      display: block;
      transition: 0.15s ease-in-out;
      display: flex;
      align-items: center;
      margin-right: 45px;

      @media (max-width: 1400px) {
        margin-right: 35px;
        font-size: ${themeGet('fontSizes.base', '15')}px;
      }
      &:hover {
        color: ${themeGet('colors.primary.regular', '#009e7f')};
      }
      &.current-page {
        color: ${themeGet('colors.primary.regular', '#009e7f')};
      }
    }
  }

  .user-pages-dropdown {
    .popover-handler {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      display: block;
      overflow: hidden;
      img {
        width: 100%;
        height: auto;
        display: block;
      }
    }

    .popover-content {
      .inner-wrap {
        /* padding: ; */
      }
    }
  }
`;

export const MainMenu = styled.div`
  display: flex;
  align-items: center;

  .popover-wrapper {
    .popover-content {
      .menu-item {
        font-family: ${themeGet('fonts.body', 'Lato')};
        a {
          font-size: ${themeGet('fontSizes.base', '15')}px;
          font-weight: ${themeGet('fontWeights.bold', '700')};
          color: ${themeGet('colors.text.bold', '#0D1136')};
          line-height: 1.2em;
          display: block;
          padding: 15px 30px;
          border-radius: ${themeGet('radii.base', '6px')};
          transition: 0.15s ease-in-out;
          display: flex;
          align-items: center;
          @media (max-width: 1400px) {
            margin-right: 10px;
            font-size: ${themeGet('fontSizes.base', '15')}px;
          }

          @media only screen and (min-width: 991px) and (max-width: 1200px) {
            padding: 15px 30px;
          }

          &:hover {
            color: ${themeGet('colors.primary.regular', '#009e7f')};
          }
          &.current-page {
            color: ${themeGet('colors.primary.regular', '#009e7f')};
            background-color: ${themeGet('colors.white', '#ffffff')};
          }
        }
      }
    }
  }
`;

export const MobileHeaderWrapper = styled.div`
  @media (min-width: 991px) {
    .desktop {
      display: none;
    }
  }
`;

export const MobileHeaderInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  transition: 0.25s ease-in-out;

  &.home {
    position: absolute;
    background-color: transparent;
    box-shadow: none;
  }

  &.unSticky:not(.home) {
    background-color: ${themeGet('colors.white', '#ffffff')};
    box-shadow: ${themeGet('shadows.header', '0 1px 2px rgba(0, 0, 0, 0.06)')};
  }

  &.sticky {
    position: fixed;
    background-color: ${themeGet('colors.white', '#ffffff')};
    box-shadow: ${themeGet('shadows.header', '0 1px 2px rgba(0, 0, 0, 0.06)')};

    @media only screen and (min-width: 991px) and (max-width: 1366px) {
      .searchIconWrapper {
        opacity: 1;
      }
    }
  }
`;

export const SelectedType = styled.button`
  width: auto;
  height: 38px;
  display: flex;
  align-items: center;
  background-color: ${themeGet('colors.white', '#ffffff')};
  border: 1px solid ${themeGet('colors.gray.500', '#f1f1f1')};
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: ${themeGet('radii.base', '6px')};
  outline: 0;
  min-width: 150px;
  cursor: pointer;

  span {
    display: flex;
    align-items: center;
    font-family: ${themeGet('fonts.body', 'Lato')};
    font-size: ${themeGet('fontSizes.base', '15')}px;
    font-weight: ${themeGet('fontWeights.bold', '700')};
    color: ${themeGet('colors.primary.regular', '#009e7f')};
    text-decoration: none;

    &:first-child {
      margin-right: auto;
    }
  }
`;

export const DropDownArrow = styled.span`
  width: 12px;
  margin-left: 16px;
`;

export const DrawerWrapper = styled.div``;

export const LogoWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;

  img {
    display: block;
  }
`;

export const HamburgerIcon = styled.div`
  width: 26px;
  cursor: pointer;
  display: block;
  position: relative;
  > span {
    display: block;
    background-color: ${themeGet('colors.text.bold', '#0D1136')};
    border-radius: ${themeGet('radii.base', '6px')};
    height: 2px;
    margin-bottom: 6px;

    transition: 0.2s ease-in-out;
    &:nth-child(1) {
      width: 26px;
    }
    &:nth-child(2) {
      width: 12px;
    }
    &:nth-child(3) {
      width: 22px;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
  &:hover {
    > span {
      &:nth-child(1) {
        width: 12px;
      }
      &:nth-child(2) {
        width: 22px;
      }
      &:nth-child(3) {
        width: 26px;
      }
    }
  }
`;

export const DrawerContentWrapper = styled.div`
  padding-top: 60px;
`;

export const DrawerClose = styled.div`
  display: block;
  position: absolute;
  left: 35px;
  top: 14px;
  color: ${themeGet('colors.text.regular', '#77798c')};
  cursor: pointer;
  padding: 10px;
  z-index: 1;
  svg {
    display: block;
    width: 12px;
    height: auto;
  }
`;

export const DrawerProfile = styled.div`
  background-color: ${themeGet('colors.gray.200', '#F7F7F7')};
  padding: 45px;
`;

export const LogoutView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .sign_in {
    /* background: transparent; */
    border: 0;
    padding-left: 0;
    padding-right: 25px;
  }
  .sign_in,
  .sign_up {
    height: 36px;
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export const LoginView = styled.div`
  display: flex;
  align-items: center;
`;

export const UserAvatar = styled.div`
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  display: block;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 15px;
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

export const UserDetails = styled.div`
  h3 {
    font-size: calc(${themeGet('fontSizes.base' + 'px', '15px')} - 1px);
    font-weight: ${themeGet('fontWeights.bold', '700')};
    color: ${themeGet('colors.text.bold', '#0D1136')};
    margin-bottom: 10px;
    line-height: 1.2;
  }
  span {
    display: block;
    font-size: ${themeGet('fontSizes.xs', '12')}px;
    font-weight: ${themeGet('fontWeights.regular', '400')};
    color: ${themeGet('colors.text.bold', '#0D1136')};
  }
`;

export const DrawerMenu = styled.div`
  padding: 40px 0;
`;

export const DrawerMenuItem = styled.div`
  &:last-child {
    .drawer_menu_item {
      margin-bottom: 0;
    }
  }
  .drawer_menu_item {
    a,
    .logoutBtn {
      display: block;
      padding: 5px 45px;
      font-size: calc(${themeGet('fontSizes.base', '15px')} - 1px);
      font-weight: ${themeGet('fontWeights.regular', '400')};
      color: ${themeGet('colors.text.bold', '#0D1136')};
      margin-bottom: 19px;
      position: relative;
      transition: 0.15s ease-in-out;

      &:hover {
        color: ${themeGet('colors.primary.regular', '#009e7f')};
      }
      &:before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 5px;
        height: 100%;
        background: transparent;
      }
      &.current-page {
        color: ${themeGet('colors.primary.regular', '#009e7f')};
        font-weight: ${themeGet('fontWeights.bold', '700')};
        &:before {
          background-color: ${themeGet('colors.primary.regular', '#009e7f')};
        }
      }
    }
  }
`;

export const UserOptionMenu = styled.div`
  padding: 45px 0;
  border-top: 1px solid ${themeGet('colors.gray.700', '#e6e6e6')};
`;

export const SearchModalWrapper = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: ${themeGet('colors.white', '#ffffff')};
  display: flex;
  width: 100%;

  .header-modal-search {
    width: calc(100% - 60px);

    @media (max-width: 420px) {
      input {
        width: 150px;
      }
    }

    button {
      background: transparent;
      color: ${themeGet('colors.text.bold', '#0D1136')};
      padding-left: 15px;
      padding-right: 15px;
    }
    input {
      color: ${themeGet('colors.text.bold', '#0D1136')};
      padding-left: 5px;
      padding-right: 5px;
    }
  }
`;

export const SearchModalClose = styled.button`
  border: 0;
  background: transparent;
  display: block;
  padding: 0 15px;
  color: ${themeGet('colors.text.bold', '#0D1136')};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    display: block;
    width: 20px;
    height: auto;
  }
`;

export const LanguageItem = styled.button`
  width: 100%;
  font-size: ${themeGet('fontSizes.base', '15')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.text.bold', '#0D1136')};
  line-height: 1.2em;
  display: block;
  padding: 15px 30px;
  border-radius: ${themeGet('radii.base', '6px')};
  transition: 0.15s ease-in-out;
  display: flex;
  align-items: center;
  border: 0;
  border-bottom: 1px solid ${themeGet('colors.gray.500', '#f1f1f1')};
  border-radius: 0;
  background-color: transparent;
  outline: 0;
  cursor: pointer;

  &:last-child {
    border-bottom: 0;
  }

  @media (max-width: 1400px) {
    margin-right: 10px;
    font-size: ${themeGet('fontSizes.base', '15')}px;
  }

  @media only screen and (min-width: 991px) and (max-width: 1200px) {
    padding: 15px 30px;
  }

  span {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    overflow: hidden;
    margin-right: 15px;

    svg {
      display: block;
      width: 20px;
      height: auto;
    }
  }
`;

export const LangSwitcher = styled.div`
  margin-right: 20px;

  @media (max-width: 767px) {
    margin-right: 10px;
  }

  .popover-wrapper.right {
    .popover-content {
      padding: 15px 0;
    }
  }
`;

export const Flag = styled.div`
  margin-right: 7px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  overflow: hidden;
  svg {
    width: 20px;
    height: auto;
  }
`;

export const TypeIcon = styled.div`
  margin-right: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 16px;
`;

export default HeaderWrapper;
