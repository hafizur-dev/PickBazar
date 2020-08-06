import React from 'react';
import { styled } from 'baseui';

const Wrapper = styled('div', () => ({
  display: 'flex',
  backgroundColor: '#fff',
  cursor: 'pointer',
  padding: '35px 20px',
  height: '100%',
}));

const IconBox = styled('div', ({ $theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100px',
  color: $theme.colors.primary,
  marginRight: '10px',
}));

const ContentBox = styled('div', () => ({
  display: 'flex',
  flexDirection: 'column',
}));

const Heading = styled('h3', ({ $theme }) => ({
  ...$theme.typography.fontBold24,
  color: $theme.colors.primary,
  margin: '0 0 5px',
}));

const SubHeading = styled('span', ({ $theme }) => ({
  ...$theme.typography.font14,
  color: $theme.colors.textDark,
  margin: '0',
}));

type Props = {
  icon: any;
  title: any;
  subtitle: any;
  onClick: any;
};
export default function SettingsCard({
  icon,
  title,
  subtitle,
  onClick,
}: Props) {
  return (
    <Wrapper onClick={onClick}>
      <IconBox>{icon}</IconBox>
      <ContentBox>
        <Heading>{title}</Heading>
        <SubHeading>{subtitle}</SubHeading>
      </ContentBox>
    </Wrapper>
  );
}
