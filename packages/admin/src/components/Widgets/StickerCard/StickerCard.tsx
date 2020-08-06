import React from 'react';
import {
  Card,
  TopInfo,
  TitleWrapper,
  Title,
  SubTitle,
  IconBox,
  Price,
  Note,
  Text,
  Link,
} from './StickerCard.style';
import { IosArrowUp } from '../../../assets/icons/IosArrowUp';
import { IosArrowDown } from '../../../assets/icons/IosArrowDown';

const StickerCard = ({
  title,
  subtitle,
  icon,
  price,
  indicator,
  indicatorText,
  note,
  link,
  linkText,
}: any) => {
  return (
    <Card>
      <TopInfo>
        <TitleWrapper>
          <Title>{title}</Title>
          <SubTitle>{subtitle}</SubTitle>
        </TitleWrapper>

        <IconBox>{icon}</IconBox>
      </TopInfo>

      <Price>{price}</Price>
      {indicator !== '' ? (
        indicator === 'up' ? (
          <Text style={{ color: '#03D3B5' }}>
            <IosArrowUp width='9px' height='11px' /> {indicatorText}
            <Note> {note}</Note>
          </Text>
        ) : indicator === 'down' ? (
          <Text style={{ color: '#FC6687' }}>
            <IosArrowDown width='9px' height='11px' /> {indicatorText}
            <Note> {note}</Note>
          </Text>
        ) : (
          ''
        )
      ) : (
        ''
      )}
      {link !== '' && (
        <Link href={link} target='_blank'>
          {linkText}
        </Link>
      )}
    </Card>
  );
};

export default StickerCard;
