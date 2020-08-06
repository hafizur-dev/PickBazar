import React from "react";
import { Block } from "baseui/block";

const DrawerBox = ({ overrides, children }: any) => {
  return (
    <Block
      overrides={{
        Block: {
          style: {
            width: "100%",
            height: "auto",
            padding: "30px",
            borderRadius: "3px",
            backgroundColor: "#ffffff"
          }
        },
        ...overrides
      }}
    >
      {children}
    </Block>
  );
};

export default DrawerBox;
