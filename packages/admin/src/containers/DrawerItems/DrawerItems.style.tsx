import { styled } from "baseui";

export const Form = styled("form", ({ $theme }) => ({
  // minHeight: '100vh',
  backgroundColor: $theme.colors.backgroundF7,
  paddingBottom: "100px"
}));

export const DrawerTitleWrapper = styled("div", ({ $theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  margin: "-55px 0 30px",
  position: "fixed"
}));

export const DrawerTitle = styled("h3", ({ $theme }) => ({
  ...$theme.typography.fontBold18,
  margin: 0,
  color: $theme.colors.textDark
}));

export const FieldDetails = styled("span", ({ $theme }) => ({
  ...$theme.typography.font14,
  padding: "28px 0 15px",
  color: $theme.colors.textNormal,
  display: "block",

  "@media only screen and (max-width: 991px)": {
    padding: "30px 0"
  }
}));

export const ButtonGroup = styled("div", ({ $theme }) => ({
  padding: "30px 60px",
  display: "flex",
  alignItems: "center",
  position: "fixed",
  bottom: "0",
  right: "0",
  width: "100%",
  backgroundColor: "#ffffff",
  boxShadow: "0 0 3px rgba(0, 0, 0, 0.1)",

  "@media only screen and (max-width: 767px)": {
    padding: "20px 30px"
  }
}));
