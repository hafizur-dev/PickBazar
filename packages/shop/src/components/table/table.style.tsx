import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const CustomizedTable = styled.table`
  && {
    border-collapse: separate;
    border-spacing: 0;

    thead.rc-table-thead {
      th {
        padding: 15px;
        font-family: ${themeGet('fonts.body', 'Lato')};
        font-size: ${themeGet('fontSizes.sm', '13')}px;
        font-weight: ${themeGet('fontWeights.bold', '700')};
        color: ${themeGet('colors.text.bold', '#0D1136')};
      }
    }

    tr.rc-table-row {
      &:hover {
        background-color: inherit;
      }

      td {
        padding: 20px 15px;
        font-family: ${themeGet('fonts.body', 'Lato')};
        font-size: ${themeGet('fontSizes.base', '15')}px;
        font-weight: ${themeGet('fontWeights.regular', '400')};
        color: ${themeGet('colors.text.bold', '#0D1136')};
      }

      &:not(.rc-table-expanded-row) {
        cursor: pointer;
      }
    }

    tr.rc-table-expanded-row {
      > td {
        padding: 0;
        white-space: normal;
        border: 1px solid ${themeGet('colors.gray.700', '#E6E6E6')};
        white-space: normal;
      }

      tr.rc-table-row {
        cursor: default;
      }
    }
  }
`;
