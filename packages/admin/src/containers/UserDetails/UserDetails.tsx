import React from 'react';
import {
  UserDetailsWrapper,
  InfoCard,
  InfoCardDetails,
  InfoCardTitle,
  InfoCardTag,
} from './UserDetails.style';

export type UserDetailsProps = {};

export const UserDetails: React.FC<UserDetailsProps> = () => {
  return (
    <UserDetailsWrapper className="user-details">
      <InfoCard className="info-card">
        <InfoCardTitle>Created Account :</InfoCardTitle>
        <InfoCardDetails>9/10/2019</InfoCardDetails>
      </InfoCard>
      <InfoCard className="info-card">
        <InfoCardTitle>User Address :</InfoCardTitle>
        <InfoCardDetails>
          223, Raw Street, Rd-22, Newyork <InfoCardTag>Primary</InfoCardTag>
        </InfoCardDetails>
        <InfoCardDetails>223, Raw Street, Rd-22, Newyork</InfoCardDetails>
      </InfoCard>
      <InfoCard className="info-card">
        <InfoCardTitle>Contact :</InfoCardTitle>
        <InfoCardDetails>
          +8801752273008 <InfoCardTag>Primary</InfoCardTag>
        </InfoCardDetails>
        <InfoCardDetails>+8801753373003</InfoCardDetails>
      </InfoCard>
    </UserDetailsWrapper>
  );
};

export default UserDetails;
