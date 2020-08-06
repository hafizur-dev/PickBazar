import styled from 'styled-components';
// import { themeGet } from '@styled-system/theme-get';
import css from '@styled-system/css';
export const StyledCheckBox = styled.div({
  display: 'inline-flex',
});
export const StyledCheckBoxInputIndicator = styled.div(
  css({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 14,
    height: 14,
    borderRadius: 'base',
    borderWidth: 1,
    borderColor: 'text.regular',
    position: 'relative',
    transition: 'all 0.3s ease',
    '&::after': {
      content: ' ',
      width: 2,
      height: 6,
      transform: 'rotate(45deg) scale(0.8)',
      borderBottom: '2px solid',
      borderRight: '2px solid',
      borderColor: 'text.regular',
      position: 'absolute',
      top: 1,
      opacity: 0,
      visibility: 'hidden',
      transitionProperty: 'opacity, visibility',
      transitionDuration: '0.3s',
    },
  })
);
export const StyledCheckBoxInput = styled.input(
  css({
    opacity: 0,
    position: 'absolute',
    margin: 0,
    zIndex: -1,
    width: 0,
    height: 0,
    overflow: 'hidden',
    pointerEvents: 'none',

    '&:checked + div': {
      borderColor: 'text.regular',
      backgroundColor: 'white',
      '&::after': {
        opacity: 1,
        visibility: 'visible',
        transform: 'rotate(45deg) scale(1)',
      },
    },
  })
);

export const StyledCheckBoxLabel = styled.label<any>(
  css({
    display: 'flex',
    alignItems: 'center',
    color: 'text.regular',
    fontSize: 'base',
    fontWeight: 'regular',
  }),
  ({ position }) => ({
    flexDirection: position === 'right' ? 'row-reverse' : 'row',
  })
);
export const StyledCheckBoxLabelText = styled.span<any>((props) =>
  props.position === 'left'
    ? {
        marginRight: 10,
      }
    : { marginLeft: 10 }
);
// const CheckBoxStyle = styled.div`
/* display: inline-flex; */
/* Switch label default style */
/* .pickbazar__field-label { */
/* color: ${themeGet('colors.text.regular', '#77798C')};
    font-size: ${themeGet('fontSizes.2', '14')}px;
    font-weight: 400; */
/* } */

/* Switch label style when labelPosition on left */
/* &.label_left {
    label { */
/* display: flex; */
/* align-items: center; */
/* .pickbazar__field-label {
        margin-right: 10px;
      } */
/* }
  } */

/* Switch label style when labelPosition on right */
/* &.label_right {
    label { */
/* display: flex;
      flex-direction: row-reverse;
      align-items: center; */

/* .pickbazar__field-label {
        margin-left: 10px;
      } */
// }
// }

/* Checkbox default style */
/* input[type='checkbox'] {
    &.checkbox { */
/* opacity: 0;
      position: absolute;
      margin: 0;
      z-index: -1;
      width: 0;
      height: 0;
      overflow: hidden;
      pointer-events: none;

      &:checked + div {
        border-color: ${themeGet('colorsdarkRegular', '#77798C')};
        background-color: #ffffff;
        &::after {
          opacity: 1;
          visibility: visible;
          transform: rotate(45deg) scale(1);
        }
      } */
/* }
    + div { */
/* display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 14px;
      height: 14px;
      border-radius: 6px;
      border: 1px solid ${themeGet('colorsdarkRegular', '#77798C')};
      position: relative;
      transition: all 0.3s ease;
      &::after {
        content: '';
        width: 2px;
        height: 6px;
        transform: rotate(45deg) scale(0.8);
        border-bottom: 2px solid ${themeGet('colorsdarkRegular', '#77798C')};
        border-right: 2px solid ${themeGet('colorsdarkRegular', '#77798C')};
        position: absolute;
        top: 1px;
        opacity: 0;
        visibility: hidden;
        transition-property: opacity, visibility;
        transition-duration: 0.3s;
      }
    } */
/* }
`; */

// CheckBoxStyle.displayName = 'CheckBoxStyle';

// export default CheckBoxStyle;
