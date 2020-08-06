import React from "react";
import NotificationCard from "./NotificationCard";
import {
  Body,
  Header,
  Heading,
  ClearAll,
  Footer,
  FeedsButton
} from "./Notification.style";

export default function Notification({
  data = [],
  onClear,
  feedBtnClick
}: any) {
  return (
    <div>
      <Header>
        <Heading>Notification</Heading>
        <ClearAll onClick={onClear}>Clear all</ClearAll>
      </Header>
      <Body>
        {data.map((item, index) => (
          <NotificationCard key={index} {...item} />
        ))}
      </Body>
      <Footer>
        <FeedsButton onClick={feedBtnClick}>More Feeds</FeedsButton>
      </Footer>
    </div>
  );
}
