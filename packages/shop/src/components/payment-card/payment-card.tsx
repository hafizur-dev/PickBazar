import React from 'react';
import Card from './card';
import { CloseIcon } from 'assets/icons/CloseIcon';
import { DeleteButton, Wrapper } from './payment-card.style';

interface PaymentCardProps {
  className?: string;
  logo: string;
  alt: string;
  cardNumber: string;
  name: string;
  color?: string;
}

const PaymentCard: React.FunctionComponent<any> = ({
  className,
  onChange,
  onDelete,
  name,
  id,
  cardType,
  lastFourDigit,
  type,
  color,
}) => {
  function handleChange() {
    onChange();
  }
  function handleDelete() {
    onDelete();
  }
  return (
    <Wrapper
      htmlFor={`payment-card-${id}`}
      className={`payment-card-radio ${className ? className : ''}`}
    >
      <input
        type='radio'
        id={`payment-card-${id}`}
        name={name}
        value={`payment-card-${id}`}
        onChange={handleChange}
        checked={type === 'primary'}
      />

      <Card
        id={`card-${id}`}
        cardType={cardType}
        lastFourDigit={lastFourDigit}
        color={color}
        name={name}
      />

      <DeleteButton
        // type="submit"
        onClick={handleDelete}
        className='card-remove-btn'
      >
        <CloseIcon />
      </DeleteButton>
    </Wrapper>
  );
};

export default PaymentCard;
