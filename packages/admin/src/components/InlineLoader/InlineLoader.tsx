import React, { FC, memo } from "react";
import { styled } from "baseui";

const Container = styled("div", () => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "500px",
  width: "100%",
  padding: "5%",
  position: "relative"
}));

const Dots = styled("div", props => ({
  display: "inline-block",
  background: props.$theme.colors.primary,
  height: "5px",
  width: "5px",
  opacity: 0,
  borderRadius: "50%",
  transform: "translateX(-300px)",
  margin: "0 2px 0 2px",
  animationDuration: "4s",
  animationIterationCount: "infinite",
  animationName: {
    from: {
      transform: "translateX(0px)",
      opacity: "0.8"
    },
    to: {
      transform: "translateX(300px)",
      opacity: "0"
    }
  },
  animationDelay: props.delay && props.delay
}));

export interface InLineLoaderProps {
  color?: string;
}

const Dot = delay => {
  return <Dots delay={delay} />;
};

export const InLineLoader: FC<InLineLoaderProps> = memo(props => {
  const { color = "#4092de" } = props;

  return (
    <Container color={color}>
      <Dot delay=".8s" />
      <Dot delay=".7s" />
      <Dot delay=".6s" />
      <Dot delay=".5s" />
      <Dot delay=".4s" />
      <Dot delay=".3s" />
      <Dot delay=".2s" />
      <Dot delay=".1s" />
    </Container>
  );
});
