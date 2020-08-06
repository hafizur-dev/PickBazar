import React from 'react';
import {
  PhoneInput as BasePhoneInput,
  COUNTRIES,
  SIZE
} from "baseui/phone-input";

const PhoneInput = ({ ...props }) => {
  return (
    <BasePhoneInput
      {...props}
    />
  );
};

export { COUNTRIES, SIZE };
export default PhoneInput;
