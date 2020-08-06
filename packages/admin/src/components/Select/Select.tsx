import * as React from 'react';
import { Select } from 'baseui/select';
import { CaretDownIcon } from '../../assets/icons/CaretDownIcon';

export const getContainerFontStyle = ({ $theme }) => {
  return $theme.typography.fontBold14;
};

export default ({ ...props }) => {
  return (
    <Select
      overrides={{
        SelectArrow: () => {
          return <CaretDownIcon />;
        },
        Popover: {
          props: {
            overrides: {
              Body: {
                style: { zIndex: 1 },
              },
            },
          },
        },
        Placeholder: {
          style: ({ $theme }) => ({
            color: $theme.colors.textDark,
            ...getContainerFontStyle({ $theme }),
          }),
        },
        SingleValue: {
          style: ({ $theme }) => ({
            ...getContainerFontStyle({ $theme }),
            color: $theme.colors.textDark,
            lineHeight: '1.5',
          }),
        },
        DropdownListItem: {
          style: ({ $theme }) => ({
            fontSize: '14px',
            fontWeight: '700',
            color: $theme.colors.textDark,
          }),
        },
        OptionContent: {
          style: ({ $theme, $selected }) => {
            return {
              ...$theme.typography.fontBold14,
              color: $selected
                ? $theme.colors.textDark
                : $theme.colors.textNormal,
            };
          },
        },
        DropdownOption: {
          style: ({ $theme }) => ({
            fontSize: '14px',
            fontWeight: '700',
            color: $theme.colors.textDark,
          }),
        },
      }}
      {...props}
    />
  );
};
