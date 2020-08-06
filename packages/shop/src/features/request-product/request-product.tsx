import React, { useContext, useState, useEffect } from 'react';
import Router from 'next/router';
import { Button } from 'components/button/button';
import RadioCard from 'components/radio-card/radio-card';
import RadioGroup from 'components/radio-group/radio-group';
import { Input } from 'components/forms/input';
import { Label } from 'components/forms/label';
import Uploader from 'components/upload/upload';
import UpdateAddress from 'components/address-card/address-card';
import UpdateContact from 'components/contact-card/contact-card';
import { DELETE_ADDRESS } from 'graphql/mutation/address';
import { DELETE_CARD } from 'graphql/mutation/card';
import { DELETE_CONTACT } from 'graphql/mutation/contact';
import { openModal } from '@redq/reuse-modal';
import { useMutation } from '@apollo/react-hooks';
import FormWrapper, {
  Row,
  Col,
  Container,
  FormTitleWrapper,
  FormTitle,
  NoteText,
  Heading,
  DeliveryAddress,
  ButtonGroup,
  Contact,
  SubmitBtnWrapper,
} from './request-product.style';
import { ProfileContext } from 'contexts/profile/profile.context';
import { FormattedMessage } from 'react-intl';

const Checkout: React.FC<any> = () => {
  const { state, dispatch } = useContext(ProfileContext);
  const [loading, setLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const { address, contact } = state;

  const [medicineNameOne, setMedicineNameOne] = useState('');
  const [quantityOne, setQuantityOne] = useState('');
  const [medicineNameTwo, setMedicineNameTwo] = useState('');
  const [quantityTwo, setQuantityTwo] = useState('');

  const [deleteContactMutation] = useMutation(DELETE_CONTACT);
  const [deleteAddressMutation] = useMutation(DELETE_ADDRESS);
  const [deletePaymentCardMutation] = useMutation(DELETE_CARD);

  const handleSubmit = async () => {
    setLoading(true);
    Router.push('/medicine');
    setLoading(false);
  };

  // Add or edit modal
  const handleModal = (
    modalComponent: any,
    modalProps = {},
    className: string = 'add-address-modal'
  ) => {
    openModal({
      show: true,
      config: {
        width: 360,
        height: 'auto',
        enableResizing: false,
        disableDragging: true,
        className: className,
      },
      closeOnClickOutside: true,
      component: modalComponent,
      componentProps: { item: modalProps },
    });
  };

  const handleEditDelete = async (item: any, type: string, name: string) => {
    if (type === 'edit') {
      const modalComponent = name === 'address' ? UpdateAddress : UpdateContact;
      handleModal(modalComponent, item);
    } else {
      switch (name) {
        case 'payment':
          dispatch({ type: 'DELETE_CARD', payload: item.id });

          return await deletePaymentCardMutation({
            variables: { cardId: JSON.stringify(item.id) },
          });
        case 'contact':
          dispatch({ type: 'DELETE_CONTACT', payload: item.id });

          return await deleteContactMutation({
            variables: { contactId: JSON.stringify(item.id) },
          });
        case 'address':
          dispatch({ type: 'DELETE_ADDRESS', payload: item.id });

          return await deleteAddressMutation({
            variables: { addressId: JSON.stringify(item.id) },
          });
        default:
          return false;
      }
    }
  };

  return (
    <form>
      <FormWrapper>
        <Container>
          <FormTitleWrapper>
            <FormTitle>
              <FormattedMessage
                id='reqMedicine'
                defaultMessage='Request Medicine'
              />
            </FormTitle>
          </FormTitleWrapper>

          <Heading>
            <FormattedMessage id='noteHead' defaultMessage='Note' />
          </Heading>

          <NoteText>
            <FormattedMessage
              id='noteDescription'
              defaultMessage='Product availability &amp; price will confirm over phone. Delivery Charge inside the city ${inside} &amp; outside the city ${outside}.'
              values={{ inside: 5, outside: 10 }}
            />
          </NoteText>

          <Row>
            <Col xs={12} sm={6} md={6} lg={6}>
              <Label>
                <FormattedMessage id='rmMedicineName' />
              </Label>

              <Input
                type='text'
                label='Medicine Name'
                name='medicine-Name'
                placeholder='Enter medicine name'
                value={medicineNameOne}
                onChange={(e) => setMedicineNameOne(e.target.value)}
                backgroundColor='#F7F7F7'
                height='48px'
              />
            </Col>

            <Col xs={12} sm={6} md={6} lg={6}>
              <Label>
                <FormattedMessage id='rmMedicineQuantity' />
              </Label>

              <Input
                type='text'
                label='Quantity'
                name='quantity'
                placeholder='Enter quantity'
                value={quantityOne}
                onChange={(e) => setQuantityOne(e.target.value)}
                backgroundColor='#F7F7F7'
                height='48px'
              />
            </Col>
          </Row>

          <Row>
            <Col xs={12} sm={6} md={6} lg={6}>
              <Label>
                <FormattedMessage id='rmMedicineName' />
              </Label>

              <Input
                type='text'
                label='Medicine Name'
                name='medicine-Name'
                placeholder='Enter medicine name'
                value={medicineNameTwo}
                onChange={(e) => setMedicineNameTwo(e.target.value)}
                backgroundColor='#F7F7F7'
                height='48px'
              />
            </Col>

            <Col xs={12} sm={6} md={6} lg={6}>
              <Label>
                <FormattedMessage id='rmMedicineQuantity' />
              </Label>

              <Input
                type='text'
                label='Quantity'
                name='quantity'
                placeholder='Enter quantity'
                value={quantityTwo}
                onChange={(e) => setQuantityTwo(e.target.value)}
                backgroundColor='#F7F7F7'
                height='48px'
              />
            </Col>
          </Row>

          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <Heading>
                <FormattedMessage
                  id='rmPrescripttionUpload'
                  defaultMessage='Upload your prescription'
                />
              </Heading>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12}>
              <Uploader onChange='' intlUploadText='rmUploadText' />
            </Col>
          </Row>

          {/* DeliveryAddress */}
          <DeliveryAddress>
            <Heading>
              <FormattedMessage
                id='checkoutDeliveryAddress'
                defaultMessage='Select Your Delivery Address'
              />
            </Heading>
            <ButtonGroup>
              <RadioGroup
                items={address}
                component={(item: any) => (
                  <RadioCard
                    id={item.id}
                    key={item.id}
                    title={item.name}
                    content={item.info}
                    name='address'
                    checked={item.type === 'primary'}
                    onChange={() =>
                      dispatch({
                        type: 'SET_PRIMARY_ADDRESS',
                        payload: item.id.toString(),
                      })
                    }
                    onEdit={() => handleEditDelete(item, 'edit', 'address')}
                    onDelete={() => handleEditDelete(item, 'delete', 'address')}
                  />
                )}
                secondaryComponent={
                  <Button
                    size='big'
                    variant='outlined'
                    type='button'
                    className='add-button'
                    onClick={() =>
                      handleModal(UpdateAddress, 'add-address-modal')
                    }
                  >
                    <FormattedMessage
                      id='addAddressBtn'
                      defaultMessage='Add Adderss'
                    />
                  </Button>
                }
              />
            </ButtonGroup>
          </DeliveryAddress>
          {/* Contact number */}
          <Contact>
            <Heading>
              <FormattedMessage
                id='contactNumberText'
                defaultMessage='Select Your Contact Number'
              />
            </Heading>
            <ButtonGroup>
              <RadioGroup
                items={contact}
                component={(item: any) => (
                  <RadioCard
                    id={item.id}
                    key={item.id}
                    title={item.type}
                    content={item.number}
                    checked={item.type === 'primary'}
                    onChange={() =>
                      dispatch({
                        type: 'SET_PRIMARY_CONTACT',
                        payload: item.id.toString(),
                      })
                    }
                    name='contact'
                    onEdit={() => handleEditDelete(item, 'edit', 'contact')}
                    onDelete={() => handleEditDelete(item, 'delete', 'contact')}
                  />
                )}
                secondaryComponent={
                  <Button
                    size='big'
                    variant='outlined'
                    type='button'
                    className='add-button'
                    onClick={() =>
                      handleModal(UpdateContact, {}, 'add-contact-modal')
                    }
                  >
                    <FormattedMessage
                      id='addContactBtn'
                      defaultMessage='Add Contact'
                    />
                  </Button>
                }
              />
            </ButtonGroup>
          </Contact>

          <SubmitBtnWrapper>
            <Button
              type='button'
              onClick={handleSubmit}
              size='big'
              loading={loading}
              style={{ width: '100%' }}
            >
              <FormattedMessage
                id='submitRequest'
                defaultMessage='Submit Request'
              />
            </Button>
          </SubmitBtnWrapper>
        </Container>
      </FormWrapper>
    </form>
  );
};

export default Checkout;
