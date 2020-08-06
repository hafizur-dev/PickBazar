import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import uuidv4 from 'uuid/v4';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { Scrollbars } from 'react-custom-scrollbars';
import { useDrawerDispatch } from '../../context/DrawerContext';
import Input from '../../components/Input/Input';
import Checkbox from '../../components/CheckBox/CheckBox';
import PhoneInput from '../../components/PhoneInput/PhoneInput';
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

const GET_STAFFS = gql`
  query getStaffs($role: String, $searchBy: String) {
    staffs(role: $role, searchBy: $searchBy) {
      id
      name
      email
      contact_number
      creation_date
      role
    }
  }
`;

const CREATE_STAFF = gql`
  mutation createStaff($staff: AddStaffInput!) {
    createStaff(staff: $staff) {
      id
      first_name
      last_name
      name
      email
      contact_number
      creation_date
      role
    }
  }
`;

type Props = any;

const StaffMemberForm: React.FC<Props> = (props) => {
  const dispatch = useDrawerDispatch();
  const closeDrawer = useCallback(() => dispatch({ type: 'CLOSE_DRAWER' }), [
    dispatch,
  ]);
  const { register, handleSubmit } = useForm();
  const [country, setCountry] = React.useState(undefined);
  const [checked, setChecked] = React.useState(true);
  const [text, setText] = React.useState('');

  const [createStaff] = useMutation(CREATE_STAFF, {
    update(cache, { data: { createStaff } }) {
      const { staffs } = cache.readQuery({
        query: GET_STAFFS,
      });

      cache.writeQuery({
        query: GET_STAFFS,
        data: { staffs: staffs.concat([createStaff]) },
      });
    },
  });
  const onSubmit = (data) => {
    const newStaff = {
      id: uuidv4(),
      ...data,
      role: data.role ? 'admin' : 'staff',
      creation_date: new Date(),
    };
    console.log(data);
    createStaff({ variables: { staff: newStaff } });
    closeDrawer();
  };

  return (
    <>
      <DrawerTitleWrapper>
        <DrawerTitle>Add Staff Member</DrawerTitle>
      </DrawerTitleWrapper>

      <Form onSubmit={handleSubmit(onSubmit)} style={{ height: '100%' }}>
        <Scrollbars
          autoHide
          renderView={(props) => (
            <div {...props} style={{ ...props.style, overflowX: 'hidden' }} />
          )}
          renderTrackHorizontal={(props) => (
            <div
              {...props}
              style={{ display: 'none' }}
              className='track-horizontal'
            />
          )}
        >
          <Row>
            <Col lg={4}>
              <FieldDetails>
                Add staff name, description and necessary information from here
              </FieldDetails>
            </Col>

            <Col lg={8}>
              <DrawerBox>
                <FormFields>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    inputRef={register({ required: true, maxLength: 20 })}
                    name='first_name'
                  />
                </FormFields>

                <FormFields>
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    inputRef={register({ required: true, maxLength: 20 })}
                    name='last_name'
                  />
                </FormFields>

                <FormFields>
                  <FormLabel>Contact No.</FormLabel>
                  <PhoneInput
                    country={country}
                    onCountryChange={({ option }) => setCountry(option)}
                    text={text}
                    onTextChange={(e) => setText(e.currentTarget.value)}
                    inputRef={register({ required: true })}
                    name='contact_number'
                  />
                </FormFields>

                <FormFields>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type='email'
                    inputRef={register({ required: true })}
                    name='email'
                  />
                </FormFields>
              </DrawerBox>
            </Col>
          </Row>

          <Row>
            <Col lg={4}>
              <FieldDetails>
                Expand or restrict user’s permissions to access certain part of
                pickbazar system.
              </FieldDetails>
            </Col>

            <Col lg={8}>
              <DrawerBox>
                <FormFields>
                  <Checkbox
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                    inputRef={register}
                    name='agreement_check'
                    overrides={{
                      Label: {
                        style: ({ $theme }) => ({
                          color: $theme.colors.textNormal,
                        }),
                      },
                    }}
                  >
                    Access for created account
                  </Checkbox>
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
            type='submit'
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
            Add Staff
          </Button>
        </ButtonGroup>
      </Form>
    </>
  );
};

export default StaffMemberForm;
