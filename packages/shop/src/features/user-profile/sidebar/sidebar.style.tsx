import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import NavLink from 'components/nav-link/nav-link';

const SidebarWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  background-color: ${themeGet('colors.white', '#ffffff')};
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.16);
`;

const SidebarTop = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 40px 0;
`;

const SidebarBottom = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 40px 0;
  background-color: ${themeGet('colors.gray.200', '#f7f7f7')};
`;

const SidebarMenu = styled(NavLink)<any>`
  display: flex;
  a {
    font-family: ${themeGet('fonts.body', 'Lato')};
    font-size: ${themeGet('fontSizes.base', '15')}px;
    font-weight: ${themeGet('fontWeights.bold', '700')};
    color: ${themeGet('colors.text.bold', '#0D1136')};
    transition: color 0.35s ease;
    padding: 15px 60px;

    &.current-page {
      color: ${themeGet('colors.primary.regular', '#009e7f')};
      border-left: 5px solid ${themeGet('colors.primary.regular', '#009e7f')};
      padding-left: 55px;
    }

    &:hover {
      color: ${themeGet('colors.primary.regular', '#009e7f')};
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const LogoutButton = styled.button`
  border: none;
  background-color: transparent;
  text-align: left;
  cursor: pointer;
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.base', '15')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.text.bold', '#0D1136')};
  transition: color 0.35s ease;
  padding: 15px 60px;
  outline: 0;

  &:hover {
    color: ${themeGet('colors.primary.regular', '#009e7f')};
  }

  &:focus {
    box-shadow: none;
  }

  margin-bottom: 0;
`;

export { SidebarWrapper, SidebarTop, SidebarBottom, SidebarMenu, LogoutButton };
