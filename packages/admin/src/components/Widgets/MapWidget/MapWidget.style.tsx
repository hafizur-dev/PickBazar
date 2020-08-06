import { styled } from "baseui";

export const Text = styled("span", ({ $theme }) => ({
  ...$theme.typography.fontBold21,
  fontFamily: $theme.typography.primaryFontFamily,
  lineHeight: "1.2",
  color: $theme.colors.textDark
}));

export const TopPart = styled("div", () => ({
  width: "100%",
  display: "flex",
  padding: "50px 35px",
  margin: "auto 0",

  "@media only screen and (max-width: 600px)": {
    flexDirection: "column"
  }
}));

export const Progressbox = styled("div", () => ({
  width: "60%",
  minHeight: "150px",
  display: "flex",
  flexDirection: "column",

  "@media only screen and (max-width: 600px)": {
    width: "100%"
  }
}));

export const ProgressSingle = styled("div", () => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  marginBottom: "20px",
  paddingRight: "50px",

  ":last-child": {
    marginBottom: "0"
  }
}));

export const ProgressBarTitleWrapper = styled("div", () => ({
  width: "100%",
  display: "flex",
  alignItems: "baseline"
}));

export const ProgressTitle = styled("span", ({ $theme }) => ({
  ...$theme.typography.fontBold14,
  fontFamily: $theme.typography.primaryFontFamily,
  lineHeight: "1.2",
  color: $theme.colors.textDark
}));

export const ProgressNumber = styled("span", ({ $theme }) => ({
  ...$theme.typography.fontBold12,
  fontFamily: $theme.typography.primaryFontFamily,
  lineHeight: "1.2",
  color: $theme.colors.textDark,
  marginLeft: "10px"
}));

export const BottomPart = styled("div", () => ({
  width: "100%",
  display: "flex",
  borderTop: "1px solid #E5E9ED"
}));

export const MapLengendBox = styled("div", () => ({
  minWidth: "100%",
  display: "flex",
  flexShrink: "0",
  padding: "0 20px",
  justifyContent: "space-around",

  "@media only screen and (max-width: 1023px)": {
    flexWrap: "wrap",
    width: "100%"
  }
}));

export const MapLengendBoxSingle = styled("div", () => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "35px 15px",

  "@media only screen and (max-width: 1023px)": {
    width: "50%"
  }
}));

export const MapLengendTitle = styled("span", ({ $theme }) => ({
  ...$theme.typography.font13,
  fontFamily: $theme.typography.primaryFontFamily,
  lineHeight: "1",
  color: $theme.colors.textNormal,
  marginBottom: "10px",
  display: "flex",
  alignItems: "center",
  whiteSpace: "nowrap"
}));

export const MapLengendValue = styled("span", ({ $theme }) => ({
  ...$theme.typography.fontBold21,
  fontFamily: $theme.typography.primaryFontFamily,
  lineHeight: "1",
  color: $theme.colors.textDark
}));

export const MapLengendColor = styled("span", () => ({
  width: "10px",
  height: "10px",
  display: "inline-block",
  borderRadius: "5px",
  marginRight: "5px"
}));

export const TotalValueBox = styled("div", ({ $theme }) => ({
  width: "40%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "50px 30px 50px 0",

  "@media only screen and (max-width: 600px)": {
    width: "100%",
    paddingTop: "0"
  }
}));
