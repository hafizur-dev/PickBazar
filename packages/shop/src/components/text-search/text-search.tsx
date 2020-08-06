import React, { ReactElement, CSSProperties } from 'react';
import { Wrapper } from './text-search.style';

type Props = {
  wrapperStyle?: CSSProperties;
  className?: string;
  position?: string;
  icon?: ReactElement;
  id: string;
  name?: string;
  inputClass?: string;
  disabled?: boolean;
  [x: string]: any;
};
export default function TextSearch({
  wrapperStyle,
  className,
  position,
  icon,
  id,
  name,
  inputClass,
  disabled,
  ...rest
}: Props) {
  const classes = disabled ? `disabled ${className}`.trim() : className;
  return (
    <Wrapper className={`field-wrapper ${classes}`.trim()} style={wrapperStyle}>
      <label htmlFor={id} className="inner-wrap">
        {position === 'left' && icon}
        <input
          type="text"
          id={id}
          name={name}
          className={inputClass}
          {...rest}
        />
        {position === 'right' && icon}
      </label>
    </Wrapper>
  );
}
