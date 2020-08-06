import { SIZE, SHAPE } from 'baseui/button';

export const getPaddingStyles = ({ $theme, $size }) => {
  switch ($size) {
    case SIZE.compact:
      return {
        paddingLeft: $theme.sizing.scale25,
        paddingRight: $theme.sizing.scale25,
      };
    case SIZE.large:
      return {
        paddingLeft: $theme.sizing.scale25,
        paddingRight: $theme.sizing.scale25,
      };
    default:
      return {
        paddingLeft: $theme.sizing.scale25,
        paddingRight: $theme.sizing.scale25,
      };
  }
};

export const getBorderRadiiStyles = ({ $theme, $size, $shape }) => {
  let value = $theme.buttonBorderRadius;

  if ($shape === SHAPE.pill) {
    if ($size === SIZE.compact) {
      value = '30px';
    } else if ($size === SIZE.large) {
      value = '42px';
    } else {
      value = '38px';
    }
  } else if ($shape === SHAPE.round) {
    value = '50%';
  }

  return {
    borderTopRightRadius: value,
    borderBottomRightRadius: value,
    borderTopLeftRadius: value,
    borderBottomLeftRadius: value,
  };
};
