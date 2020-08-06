import React, { useEffect, useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FormattedMessage } from 'react-intl';
import {
  Text,
  TextHighlighted,
  Container,
  ThumbsContainer,
  Thumb,
  ThumbInner,
  Img,
} from './upload.style';
import { UploadIcon } from 'assets/icons/UploadIcon';

const Uploader = ({ onChange, imageURL, intlUploadText }: any) => {
  const [files, setFiles] = useState(
    imageURL ? [{ name: 'demo', preview: imageURL }] : []
  );
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    multiple: false,
    onDrop: useCallback(
      (acceptedFiles) => {
        setFiles(
          acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        );
        onChange(acceptedFiles);
      },
      [onChange]
    ),
  });

  const thumbs = files.map((file) => (
    <Thumb key={file.name}>
      <ThumbInner>
        <Img src={file.preview} alt={file.name} />
      </ThumbInner>
    </Thumb>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <section className="container uploader">
      <Container {...getRootProps()}>
        <input {...getInputProps()} />
        <UploadIcon />
        <Text>
          {intlUploadText ? (
            <FormattedMessage id={intlUploadText} />
          ) : (
            <>
              <TextHighlighted>Drag/Upload</TextHighlighted> your file here
            </>
          )}
        </Text>
      </Container>
      {thumbs && <ThumbsContainer>{thumbs}</ThumbsContainer>}
    </section>
  );
};

export default Uploader;
