import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { openModal, closeModal } from '@redq/reuse-modal';
import FixedCart from './fixed-cart';
import CartPopupButton from 'components/cart-popup/cart-popup-button';
import { CURRENCY } from 'utils/constant';
import { FormattedMessage } from 'react-intl';
import { useCart } from 'contexts/cart/use-cart';

const CartPopupStyle = createGlobalStyle`
  .cartPopup{
    top: auto !important;
    left: auto !important;
    bottom: 50px !important;
    right: 50px !important;
    box-shadow: ${themeGet('shadows.big', '0 21px 36px rgba(0, 0, 0, 0.16)')};
    transform-origin: bottom right;

    @media (max-width: 767px) {
      max-width: none!important;
      width: 100% !important;
      bottom: 0 !important;
      left: 0!important;
      background: ${themeGet('colors.white', '#ffffff')};
      overflow: initial !important;
      transform-origin: bottom center;
    }
  }

.fixedCartPopup{
  @media (min-width: 991px) {
    display: none;
  }
}
`;

type CartProps = {
  onCheckout?: (e: any) => void;
};

const FixedCartPopup: React.FC<CartProps> = ({ onCheckout }) => {
  const { isOpen, cartItemsCount, toggleCart, calculatePrice } = useCart();
  const handleModal = () => {
    openModal({
      show: true,
      config: {
        className: 'cartPopup',
        width: 'auto',
        height: 'auto',
        enableResizing: false,
        disableDragging: true,
        transition: {
          tension: 360,
          friction: 40,
        },
      },
      closeOnClickOutside: true,
      component: FixedCart,
      closeComponent: () => <div />,
      componentProps: {
        onCloseBtnClick: closeModal,
        scrollbarHeight: 370,
        onCheckout: onCheckout,
      },
    });
  };

  return (
    <>
      <CartPopupStyle />
      <CartPopupButton
        className='fixedCartPopup'
        itemCount={cartItemsCount}
        itemPostfix={
          cartItemsCount > 1 ? (
            <FormattedMessage id='cartItems' defaultMessage='items' />
          ) : (
            <FormattedMessage id='cartItem' defaultMessage='item' />
          )
        }
        price={calculatePrice()}
        pricePrefix={CURRENCY}
        onClick={handleModal}
      />
    </>
  );
};

export default FixedCartPopup;
