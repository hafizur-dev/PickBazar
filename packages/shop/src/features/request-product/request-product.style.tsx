import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { Row as Rows, Col as Cols } from 'react-styled-flexboxgrid';

const FormWrapper = styled.div`
  background-color: ${themeGet('colors.gray.200', '#f7f7f7')};
  position: relative;
  padding: 130px 0 60px 0;

  @media (max-width: 990px) {
    padding: 0;
    padding-top: 60px;
  }
`;

export const Container = styled.div`
  background-color: ${themeGet('colors.white', '#ffffff')};
  border: 1px solid ${themeGet('colors.gray.500', '#f1f1f1')};
  padding: 60px;
  border-radius: ${themeGet('radii.base', '6px')};
  overflow: hidden;
  position: relative;
  @media (min-width: 990px) {
    width: 870px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 480px) {
    padding: 30px;
  }
`;

export const FormTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;

export const FormTitle = styled.h3`
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.lg', '21')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.primary.regular', '#009e7f')};
  line-height: 1.2;
  margin: 0px;
`;

export const NoteText = styled.span`
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.base', '15')}px;
  font-weight: ${themeGet('fontWeights.regular', '400')};
  color: ${themeGet('colors.text.bold', '#0D1136')};
  line-height: 1.5;
`;

export const Heading = styled.h3`
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.base', '15')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.text.bold', '#0D1136')};
  line-height: 1.2;
  margin-bottom: 20px;
`;
export const Col = styled(Cols)`
  @media only screen and (min-width: 0em) and (max-width: 47.99em) {
    margin-bottom: 50px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const Row = styled(Rows)`
  margin-top: 50px;

  @media only screen and (min-width: 0em) and (max-width: 47.99em) {
    margin-bottom: 30px;
  }
`;

export const DeliverySchedule = styled.div`
  margin-top: 60px;

  .radioGroup {
    justify-content: space-between;
    > label {
      margin-right: 0;
      flex: calc(33.3333333333% - 10px);
      max-width: calc(33.3333333333% - 10px);
      padding: 11px 15px;

      @media (max-width: 700px) {
        flex: calc(50% - 10px);
        max-width: calc(50% - 10px);
      }

      @media (max-width: 480px) {
        flex: 100%;
        max-width: 100%;
        margin-right: 0;
      }
    }
  }
`;

export const DeliveryAddress = styled.div`
  margin-top: 30px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;

  .radioGroup {
    flex-grow: 1;
    justify-content: space-between;

    label {
      margin-top: 0;
      flex: calc(33.333333333% - 10px);
      max-width: calc(33.333333333% - 10px);
      margin-bottom: 15px;

      &:nth-child(3n) {
        margin-right: 0;
      }

      @media (max-width: 700px) {
        flex: calc(50% - 10px);
        max-width: calc(50% - 10px);

        &:nth-child(3n) {
          margin-right: 15px;
        }

        &:nth-child(2n) {
          margin-right: 0;
        }
      }

      @media (max-width: 480px) {
        flex: 100%;
        max-width: 100%;
        margin-right: 0;

        &:nth-child(3n) {
          margin-right: 0;
        }

        &:nth-child(2n) {
          margin-right: 0;
        }
      }
    }
  }

  .add-button {
    flex: calc(33.3333333333% - 10px);
    max-width: calc(33.3333333333% - 10px);
    flex-shrink: 0;
    height: auto;
    min-height: 77px;
    border: 1px dashed ${themeGet('colors.gray.500', '#f1f1f1')};
    margin-bottom: 15px;
    margin-left: 0;
    margin-right: auto;
    &:hover {
      border-color: ${themeGet('colors.primary.regular', '#009e7f')};
    }

    @media (max-width: 700px) {
      flex: calc(50% - 10px);
      max-width: calc(50% - 10px);
    }

    @media (max-width: 480px) {
      flex: 100%;
      max-width: 100%;
    }
  }
`;

export const Contact = styled.div`
  margin-top: 30px;
`;

export const PaymentOption = styled.div`
  margin-top: 60px;
  padding-top: 60px;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    width: 150%;
    height: 1px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    background: ${themeGet('colors.gray.500', '#f1f1f1')};
  }
`;

export const PaymentCardList = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  margin-top: 15px;

  .payment-card-radio {
    display: block;
    cursor: pointer;
    position: relative;
    > input {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      &:checked {
        & ~ .payment-card {
          border-color: ${themeGet('colors.primary.regular', '#009e7f')};
        }
      }
    }
    .payment-card {
      pointer-events: none;
    }
  }
`;

export const SavedCard = styled.div`
  flex: calc(100% - 120px);
  max-width: calc(100% - 120px);

  .saved-card-title {
    font-family: ${themeGet('fonts.body', 'Lato')};
    font-size: ${themeGet('fontSizes.sm', '13')}px;
    font-weight: ${themeGet('fontWeights.bold', '700')};
    color: ${themeGet('colors.primary.regular', '#009e7f')};
    margin-bottom: 10px;
    display: block;
  }
`;

export const AddCard = styled.div`
  flex: 105px;
  max-width: 105px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  .reusecore__button {
    flex-grow: 1;
    height: auto;
    border: 1px dashed ${themeGet('colors.gray.500', '#f1f1f1')};
    border-radius: ${themeGet('radii.base', '6px')};
    padding: 0 5px;
    flex-direction: column;
    svg {
      width: 18px;
      height: auto;
    }
    .btn-icon {
      margin-bottom: 5px;
    }
    &:hover {
      border-color: ${themeGet('colors.primary.regular', '#009e7f')};
    }
  }
  .safe-label {
    font-family: ${themeGet('fonts.body', 'Lato')};
    font-size: ${themeGet('fontSizes.sm', '13')}px;
    font-weight: ${themeGet('fontWeights.bold', '700')};
    color: ${themeGet('colors.text.regular', '#77798c')};
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 10px;
    > svg {
      fill: currentColor;
      margin-right: 4px;
    }
  }
`;

export const OtherPayOption = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: stretch;

  .other-pay-radio {
    flex-grow: 1;
    span {
      display: block;
      border-radius: ${themeGet('radii.base', '6px')};
      background-color: ${themeGet('colors.gray.200', '#f7f7f7')};
      border: 1px solid ${themeGet('colors.gray.200', '#f7f7f7')};
      text-align: center;
      padding: 12px 20px;
      cursor: pointer;
      color: ${themeGet('colors.text.bold', '#0D1136')};
      font-family: ${themeGet('fonts.body', 'Lato')};
      font-size: ${themeGet('fontSizes.sm', '13')}px;
      font-weight: ${themeGet('fontWeights.regular', '400')};
      line-height: 24px;
      -webkit-transition: all 0.25s ease;
      transition: all 0.25s ease;
    }
    input {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      &:checked {
        & ~ span {
          border-color: ${themeGet('colors.primary.regular', '#009e7f')};
          background-color: ${themeGet('colors.white', '#ffffff')};
        }
      }
    }
    &.cash-on-delivery {
      flex: 320px;
      max-width: 230px;
      margin-left: 15px;
    }
  }
`;

export const SubmitBtnWrapper = styled.div`
  margin-top: 60px;
  .reusecore__button {
    width: 100%;
  }
`;

export const PaymentGroupWrapper = styled.div``;

export const AddAddressWrapper = styled.div`
  textarea {
    font-family: lato;
  }
  .field-wrapper {
    margin-bottom: 30px;
  }
`;

export const AddcontactWrapper = styled.div`
  textarea {
    font-family: lato;
  }
  .field-wrapper,
  .button_outline {
    margin-bottom: 30px;
  }
  .button_outline {
    border: 1px dashed ${themeGet('colors.gray.500', '#f1f1f1')};
    .btn-icon {
      margin-right: 5px;
    }
    &:hover {
      border-color: ${themeGet('colors.primary.regular', '#009e7f')};
    }
  }
`;

export const AuthenticationOverlay = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: rgba(255, 255, 255, 0.9);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding-top: 300px;
  z-index: 100;

  button {
    box-shadow: 0 0 36px rgba(0, 0, 0, 0.16);
  }
`;

export const InfoText = styled.span`
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.base', '15')}px;
  font-weight: ${themeGet('fontWeights.regular', '400')};
  color: ${themeGet('colors.text.bold', '#0D1136')};
  margin-bottom: 15px;
  margin-top: 15px;
`;

export const OrderSummary = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 60px;
  border-radius: ${themeGet('radii.base', '6px')};
  background-color: ${themeGet('colors.gray.200', '#f7f7f7')};

  @media (max-width: 767px) {
    padding: 30px;
  }
`;

export const OrderLabel = styled.span`
  color: ${themeGet('colors.text.bold', '#0D1136')};
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.base', '15')}px;
  font-weight: ${themeGet('fontWeights.regular', '400')};
  line-height: 24px;
`;

export const OrderAmount = styled.span`
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.base', '15')}px;
  color: ${themeGet('colors.text.bold', '#0D1136')};
  line-height: 24px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
`;

export const OrderSummaryItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  &.voucherWrapper {
    @media (max-width: 630px) {
      flex-direction: column;
      align-items: flex-start;

      ${OrderLabel} {
        margin-bottom: 10px;
      }
    }
  }

  .couponDisplayBox {
    width: 50%;

    @media (max-width: 767px) {
      width: 60%;
    }

    @media (max-width: 630px) {
      width: 100%;
    }
  }
`;

export const CouponBoxWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 50%;

  @media (max-width: 767px) {
    width: 60%;
  }

  @media (max-width: 630px) {
    width: 100%;
  }

  .couponCodeText {
    margin-right: auto;
  }
`;

export const CouponCode = styled.p`
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.base', '15')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.text.regular', '#77798c')};

  width: 100%;
  display: flex;
  justify-content: center;

  span {
    font-weight: ${themeGet('fontWeights.bold', '700')};
    color: ${themeGet('colors.primary.regular', '#009e7f')};
    margin-left: 5px;
  }
`;

export const ErrorMsg = styled('span')`
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.base', '15')}px;
  font-weight: ${themeGet('fontWeights.regular', '400')};
  color: ${themeGet('colors.secondary.hover', '#FF282F')};
  padding-top: 10px;
  display: flex;
  justify-content: center;
  position: absolute;
  left: 20px;
  bottom: -25px;
`;

export default FormWrapper;
