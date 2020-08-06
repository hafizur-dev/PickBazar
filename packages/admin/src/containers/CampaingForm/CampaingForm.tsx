import React, { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import uuidv4 from 'uuid/v4';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { useDrawerDispatch } from '../../context/DrawerContext';
import { Scrollbars } from 'react-custom-scrollbars';
import Input from '../../components/Input/Input';
import Select from '../../components/Select/Select';
import Button, { KIND } from '../../components/Button/Button';
import DrawerBox from '../../components/DrawerBox/DrawerBox';
import { Row, Col } from '../../components/FlexBox/FlexBox';
import {
  Form,
  DrawerTitleWrapper,
  DrawerTitle,
  FieldDetails,
  ButtonGroup,
} from '../DrawerItems/DrawerItems.style';
import { FormFields, FormLabel } from '../../components/FormFields/FormFields';

const GET_COUPONS = gql`
  query getCoupons($status: String, $searchBy: String) {
    coupons(status: $status, searchBy: $searchBy) {
      id
      title
      code
      number_of_used_coupon
      number_of_coupon
      expiration_date
      creation_date
      status
    }
  }
`;
const CREATE_COUPON = gql`
  mutation createCoupon($coupon: AddCouponInput!) {
    createCoupon(coupon: $coupon) {
      id
      title
      code
      number_of_used_coupon
      number_of_coupon
      expiration_date
      creation_date
      status
    }
  }
`;

const options = [
  { value: 'grocery', name: 'Grocery', id: '1' },
  { value: 'women-cloths', name: 'Women Cloths', id: '2' },
  { value: 'bags', name: 'Bags', id: '3' },
  { value: 'makeup', name: 'Makeup', id: '4' },
];
type Props = any;

const AddCampaing: React.FC<Props> = props => {
  const dispatch = useDrawerDispatch();
  const closeDrawer = useCallback(() => dispatch({ type: 'CLOSE_DRAWER' }), [
    dispatch,
  ]);

  const { register, handleSubmit, setValue } = useForm();
  const [category, setCategory] = useState([]);
  React.useEffect(() => {
    register({ name: 'category' });
  }, [register]);
  const [createCoupon] = useMutation(CREATE_COUPON, {
    update(cache, { data: { createCoupon } }) {
      const { coupons } = cache.readQuery({
        query: GET_COUPONS,
      });

      cache.writeQuery({
        query: GET_COUPONS,
        data: { coupons: coupons.concat([createCoupon]) },
      });
    },
  });

  const onSubmit = data => {
    const newCoupon = {
      id: uuidv4(),
      title: data.name,
      code: data.code,
      category: category[0].value,
      discount_in_percent: Number(data.discount_in_percent),
      number_of_coupon: Number(data.number_of_coupon),
      minimum_amount: Number(data.minimum_amount),
      creation_date: new Date(),
    };
    createCoupon({
      variables: { coupon: newCoupon },
    });
    closeDrawer();
    console.log(newCoupon, 'newCoupon');
  };
  const handleCategoryChange = ({ value }) => {
    setValue('category', value);
    setCategory(value);
  };

  return (
    <>
      <DrawerTitleWrapper>
        <DrawerTitle>Add Campaign</DrawerTitle>
      </DrawerTitleWrapper>

      <Form onSubmit={handleSubmit(onSubmit)} style={{ height: '100%' }}>
        <Scrollbars
          autoHide
          renderView={props => (
            <div {...props} style={{ ...props.style, overflowX: 'hidden' }} />
          )}
          renderTrackHorizontal={props => (
            <div
              {...props}
              style={{ display: 'none' }}
              className="track-horizontal"
            />
          )}
        >
          <Row>
            <Col lg={4}>
              <FieldDetails>
                Add your campaign description and necessary informations from
                here
              </FieldDetails>
            </Col>

            <Col lg={8}>
              <DrawerBox>
                <FormFields>
                  <FormLabel>Campaign Name</FormLabel>
                  <Input inputRef={register} name="name" />
                </FormFields>

                <FormFields>
                  <FormLabel>Discount Percent</FormLabel>
                  <Input
                    type="number"
                    inputRef={register({ required: true })}
                    name="discount_in_percent"
                  />
                </FormFields>

                <FormFields>
                  <FormLabel>Discount Code</FormLabel>
                  <Input inputRef={register({ required: true })} name="code" />
                </FormFields>

                <FormFields>
                  <FormLabel>Number of Coupon</FormLabel>
                  <Input
                    type="number"
                    inputRef={register({ required: true })}
                    name="number_of_coupon"
                  />
                </FormFields>

                <FormFields>
                  <FormLabel>Category</FormLabel>
                  <Select
                    options={options}
                    labelKey="name"
                    valueKey="value"
                    placeholder="Ex: Choose parent category"
                    value={category}
                    searchable={false}
                    onChange={handleCategoryChange}
                    overrides={{
                      Placeholder: {
                        style: ({ $theme }) => {
                          return {
                            ...$theme.typography.fontBold14,
                            color: $theme.colors.textNormal,
                          };
                        },
                      },
                      DropdownListItem: {
                        style: ({ $theme }) => {
                          return {
                            ...$theme.typography.fontBold14,
                            color: $theme.colors.textNormal,
                          };
                        },
                      },
                      OptionContent: {
                        style: ({ $theme, $selected }) => {
                          return {
                            ...$theme.typography.fontBold14,
                            color: $selected
                              ? $theme.colors.textDark
                              : $theme.colors.textNormal,
                          };
                        },
                      },
                      SingleValue: {
                        style: ({ $theme }) => {
                          return {
                            ...$theme.typography.fontBold14,
                            color: $theme.colors.textNormal,
                          };
                        },
                      },
                      Popover: {
                        props: {
                          overrides: {
                            Body: {
                              style: { zIndex: 5 },
                            },
                          },
                        },
                      },
                    }}
                  />
                </FormFields>

                <FormFields>
                  <FormLabel>Minimum Amount Required</FormLabel>
                  <Input
                    type="number"
                    inputRef={register}
                    name="minimum_amount"
                  />
                </FormFields>
              </DrawerBox>
            </Col>
          </Row>
        </Scrollbars>

        <ButtonGroup>
          <Button
            kind={KIND.minimal}
            onClick={closeDrawer}
            overrides={{
              BaseButton: {
                style: ({ $theme }) => ({
                  width: '50%',
                  borderTopLeftRadius: '3px',
                  borderTopRightRadius: '3px',
                  borderBottomRightRadius: '3px',
                  borderBottomLeftRadius: '3px',
                  marginRight: '15px',
                  color: $theme.colors.red400,
                }),
              },
            }}
          >
            Cancel
          </Button>

          <Button
            type="submit"
            overrides={{
              BaseButton: {
                style: ({ $theme }) => ({
                  width: '50%',
                  borderTopLeftRadius: '3px',
                  borderTopRightRadius: '3px',
                  borderBottomRightRadius: '3px',
                  borderBottomLeftRadius: '3px',
                }),
              },
            }}
          >
            Create Campaign
          </Button>
        </ButtonGroup>
      </Form>
    </>
  );
};

export default AddCampaing;
