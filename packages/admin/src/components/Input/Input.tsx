import React from 'react';
import { Input as BaseInput, SIZE } from 'baseui/input';

const getInputFontStyle = ({ $theme }) => {
  return {
    color: $theme.colors.textDark,
    ...$theme.typography.fontBold14,
  };
};

const Input = ({ ...props }) => {
  return (
    <BaseInput
      overrides={{
        Input: {
          style: ({ $theme }) => {
            return {
              ...getInputFontStyle({ $theme }),
            };
          },
        },
      }}
      {...props}
    />
  );
};

export { SIZE };
export default Input;
