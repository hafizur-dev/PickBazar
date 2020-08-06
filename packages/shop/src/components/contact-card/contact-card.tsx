import React, { useContext } from 'react';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import * as Yup from 'yup';
import { closeModal } from '@redq/reuse-modal';
import { FormikProps, ErrorMessage, Formik, Form } from 'formik';
import { useMutation } from '@apollo/react-hooks';
import MaskedInput from 'react-text-mask';
import { ProfileContext } from 'contexts/profile/profile.context';
import { Button } from 'components/button/button';
import { UPDATE_CONTACT } from 'graphql/mutation/contact';
import { FieldWrapper, Heading } from './contact-card.style';
import { FormattedMessage } from 'react-intl';

type Props = {
  item?: any | null;
};
// Shape of form values
type FormValues = {
  id?: number | null;
  type?: string;
  number?: string;
};

const ContactValidationSchema = Yup.object().shape({
  number: Yup.string().required('Number is required'),
});

const CreateOrUpdateContact: React.FC<Props> = ({ item }) => {
  const initialValues = {
    id: item.id || null,
    type: item.type || 'secondary',
    number: item.number || '',
  };
  const [addContactMutation] = useMutation(UPDATE_CONTACT);
  const { state, dispatch } = useContext(ProfileContext);
  const handleSubmit = async (values: FormValues, { setSubmitting }: any) => {
    await addContactMutation({
      variables: { contactInput: JSON.stringify(values) },
    });
    console.log(values, 'formik values');
    dispatch({ type: 'ADD_OR_UPDATE_CONTACT', payload: values });
    closeModal();
    setSubmitting(false);
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactValidationSchema}
    >
      {({
        values,
        handleChange,
        handleBlur,
        isSubmitting,
      }: FormikProps<FormValues>) => (
        <Form>
          <Heading>
            {item && item.id ? 'Edit Contact' : 'Add New Contact'}
          </Heading>
          <FieldWrapper>
            <MaskedInput
              mask={[
                '(',
                /[1-9]/,
                /\d/,
                /\d/,
                ')',
                ' ',
                /\d/,
                /\d/,
                /\d/,
                '-',
                /\d/,
                /\d/,
                /\d/,
                /\d/,
              ]}
              className='form-control'
              placeholder='Enter a phone number'
              guide={false}
              id='my-input-id'
              value={values.number}
              onChange={handleChange}
              onBlur={handleBlur}
              name='number'
              render={(ref: any, props: {}) => (
                <StyledInput ref={ref} {...props} />
              )}
            />
          </FieldWrapper>
          <ErrorMessage name='number' component={StyledError} />

          <Button
            disabled={isSubmitting}
            type='submit'
            style={{ width: '100%', height: '44px' }}
          >
            <FormattedMessage
              id='savedContactId'
              defaultMessage='Save Contact'
            />
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default CreateOrUpdateContact;

const StyledInput = styled.input`
  width: 100%;
  height: 54px;
  border-radius: ${themeGet('radii.base', '6px')};
  font-family: ${themeGet('fonts.body', 'Lato, sans-serif')};
  border: 1px solid ${themeGet('colors.gray.700', '#e6e6e6')};
  color: ${themeGet('colors.text.bold', '#0D1136')};
  font-size: 16px;
  line-height: 19px;
  font-weight: ${themeGet('fontWeights.regular', '400')};
  padding: 0 18px;
  box-sizing: border-box;
  transition: border-color 0.25s ease;

  &:hover,
  &:focus {
    outline: 0;
  }

  &:focus {
    border-color: ${themeGet('colors.primary.regular', '#009e7f')};
  }

  &::placeholder {
    color: ${themeGet('colors.text.regular', '#77798C')};
  }
`;

const StyledError = styled.div`
  color: red;
  padding-bottom: 10px;
  margin-top: -5px;
`;
