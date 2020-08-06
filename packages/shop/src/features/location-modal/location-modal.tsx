import React, { useState, useEffect } from 'react';
import { closeModal } from '@redq/reuse-modal';
import MaskedInput from 'react-text-mask';
import { FormattedMessage } from 'react-intl';
import { getCookie, setCookie } from 'utils/session';
import {
  Wrapper,
  Container,
  LogoWrapper,
  Heading,
  SubHeading,
  OfferSection,
  Offer,
  Button,
  Input,
} from './location-modal.style';
import { GiftBox } from 'assets/icons/GiftBox';

export default function LocationModal() {
  const [zipcode, setZipcode] = useState('');
  const handleZipCode = () => {
    setCookie('zip_code', zipcode);
    closeModal();
  };

  useEffect(() => {
    if (!getCookie('first_visit')) {
      setCookie('first_visit', true);
    }
  }, []);

  return (
    <Wrapper>
      <Container>
        <Heading>
          <FormattedMessage
            id="locationModalheading"
            defaultMessage="Select Your Location"
          />
        </Heading>
        <SubHeading>
          <FormattedMessage
            id="locationModalSubHeading"
            defaultMessage="You have to select your location for deliver service perpous"
          />
        </SubHeading>
        <MaskedInput
          mask={[/\d/, /\d/, /\d/, /\d/, /\d/]}
          placeholder="Enter Your ZIP Code:"
          id="input-id"
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
          render={(ref, props) => <Input ref={ref} {...props} />}
        />
        <Button
          fullwidth
          // radius={100}
          title={'Continue'}
          onClick={handleZipCode}
        />
      </Container>
      <OfferSection>
        <GiftBox />
        <Offer>
          <FormattedMessage
            id="locationModalFooter"
            defaultMessage="Free Delivery For 1st Order"
            values={{ number: 1 }}
          />
        </Offer>
      </OfferSection>
    </Wrapper>
  );
}
