import React, { useRef, useState, useEffect } from 'react';
import { Img } from 'react-image';
import CopyToClipboard from 'react-copy-to-clipboard';
import { FormattedMessage } from 'react-intl';
import {
  GiftCardWrapper,
  GiftCardImageWrapper,
  CardInfo,
  CardContent,
  CopyButton,
  GiftCode,
  CopySuccess,
} from './gift-card.style';

type GiftCardProps = {
  image?: any;
  weight?: string;
  code?: any;
  onClick?: (e: any) => void;
  onChange?: (e: any) => void;
};

const GiftCard: React.FC<GiftCardProps> = ({
  image,
  weight,
  onClick,
  onChange,
  code,
  ...props
}) => {
  const [copyText, setCopyText] = useState({
    value: code,
    copied: false,
  });
  const codeRef = useRef(null);

  useEffect(() => {
    if (copyText.copied) {
      setTimeout(() => {
        setCopyText({
          ...copyText,
          copied: false,
        });
      }, 3500);
    }
  }, [copyText.copied]);

  return (
    <GiftCardWrapper {...props} className="product-card">
      <GiftCardImageWrapper>
        <Img src={image} className="gift-image" alt="gift image" />
      </GiftCardImageWrapper>
      <CardInfo>
        <CardContent>
          <GiftCode ref={codeRef} value={copyText.value} readOnly />

          {!copyText.copied ? (
            <CopyToClipboard
              text={copyText.value}
              onCopy={() =>
                setCopyText({
                  ...copyText,
                  copied: true,
                })
              }
            >
              <CopyButton>
                <FormattedMessage id="intlCopyBtnId" defaultMessage="Copy" />
              </CopyButton>
            </CopyToClipboard>
          ) : (
            <CopySuccess>
              <FormattedMessage
                id="intlCopySuccessId"
                defaultMessage="Copied!"
              />
            </CopySuccess>
          )}
        </CardContent>
      </CardInfo>
    </GiftCardWrapper>
  );
};

export default GiftCard;
