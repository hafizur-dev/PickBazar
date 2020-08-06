import React from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { openModal, closeModal } from '@redq/reuse-modal';
import {
  ProductsRow,
  ProductsCol,
  ButtonWrapper,
  LoaderWrapper,
  LoaderItem,
  ProductCardWrapper,
} from './product-list.style';
import { CURRENCY } from 'utils/constant';
import { useQuery } from '@apollo/react-hooks';
import { NetworkStatus } from 'apollo-client';
import Placeholder from 'components/placeholder/placeholder';
import Fade from 'react-reveal/Fade';
import NoResultFound from 'components/no-result/no-result';
import { FormattedMessage } from 'react-intl';
import { Button } from 'components/button/button';
import { GET_PRODUCTS } from 'graphql/query/products.query';
const ErrorMessage = dynamic(() =>
  import('components/error-message/error-message')
);
const QuickView = dynamic(() => import('features/quick-view/quick-view'));
const GeneralCard = dynamic(
  import('components/product-card/product-card-one/product-card-one')
);
const BookCard = dynamic(
  import('components/product-card/product-card-two/product-card-two')
);
const FurnitureCard = dynamic(
  import('components/product-card/product-card-three/product-card-three')
);
const MedicineCard = dynamic(
  import('components/product-card/product-card-five/product-card-five')
);

type ProductsProps = {
  deviceType?: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
  fetchLimit?: number;
  loadMore?: boolean;
  type?: string;
};
export const Products: React.FC<ProductsProps> = ({
  deviceType,
  fetchLimit = 20,
  loadMore = true,
  type,
}) => {
  const router = useRouter();
  const { data, error, loading, fetchMore, networkStatus } = useQuery(
    GET_PRODUCTS,
    {
      variables: {
        type: type,
        text: router.query.text,
        category: router.query.category,
        offset: 0,
        limit: fetchLimit,
      },
      notifyOnNetworkStatusChange: true,
    }
  );
  const loadingMore = networkStatus === NetworkStatus.fetchMore;

  // Quick View Modal
  const handleModalClose = () => {
    const { pathname, query, asPath } = router;
    const as = asPath;
    router.push(
      {
        pathname,
        query,
      },
      as,
      {
        shallow: true,
      }
    );
    closeModal();
  };

  const handleQuickViewModal = (
    modalProps: any,
    deviceType: any,
    onModalClose: any
  ) => {
    const { pathname, query } = router;
    const as = `/product/${modalProps.slug}`;
    if (pathname === '/product/[slug]') {
      router.push(pathname, as);
      return;
    }
    openModal({
      show: true,
      overlayClassName: 'quick-view-overlay',
      closeOnClickOutside: false,
      component: QuickView,
      componentProps: { modalProps, deviceType, onModalClose },
      closeComponent: 'div',
      config: {
        enableResizing: false,
        disableDragging: true,
        className: 'quick-view-modal',
        width: 900,
        y: 30,
        height: 'auto',
        transition: {
          mass: 1,
          tension: 0,
          friction: 0,
        },
      },
    });
    router.push(
      {
        pathname,
        query,
      },
      {
        pathname: as,
      },
      {
        shallow: true,
      }
    );
  };
  if (error) return <ErrorMessage message={error.message} />;
  if (loading && !loadingMore) {
    return (
      <LoaderWrapper>
        <LoaderItem>
          <Placeholder uniqueKey="1" />
        </LoaderItem>
        <LoaderItem>
          <Placeholder uniqueKey="2" />
        </LoaderItem>
        <LoaderItem>
          <Placeholder uniqueKey="3" />
        </LoaderItem>
      </LoaderWrapper>
    );
  }

  if (!data || !data.products || data.products.items.length === 0) {
    return <NoResultFound />;
  }
  const handleLoadMore = () => {
    fetchMore({
      variables: {
        offset: Number(data.products.items.length),
        limit: fetchLimit,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return previousResult;
        }
        return {
          products: {
            __typename: previousResult.products.__typename,
            items: [
              ...previousResult.products.items,
              ...fetchMoreResult.products.items,
            ],
            hasMore: fetchMoreResult.products.hasMore,
          },
        };
      },
    });
  };

  const renderCard = (productType, props) => {
    switch (productType) {
      case 'book':
        return (
          <BookCard
            title={props.title}
            image={props.image}
            name={props?.author?.name}
            data={props}
            deviceType={deviceType}
            onClick={() =>
              router.push('/product/[slug]', `/product/${props.slug}`)
            }
          />
        );
      case 'medicine':
        return (
          <MedicineCard
            title={props.title}
            currency={CURRENCY}
            image={props.image}
            price={props.price}
            weight={props.unit}
            data={props}
          />
        );
      case 'furniture':
        return (
          <FurnitureCard
            title={props.title}
            image={props.gallery[0].url}
            discountInPercent={props.discountInPercent}
            onClick={() =>
              handleQuickViewModal(props, deviceType, handleModalClose)
            }
          />
        );
      default:
        return (
          <GeneralCard
            title={props.title}
            description={props.description}
            image={props.image}
            weight={props.unit}
            currency={CURRENCY}
            price={props.price}
            salePrice={props.salePrice}
            discountInPercent={props.discountInPercent}
            data={props}
            deviceType={deviceType}
            onClick={() =>
              handleQuickViewModal(props, deviceType, handleModalClose)
            }
          />
        );
    }
  };
  return (
    <>
      <ProductsRow>
        {data.products.items.map((item: any, index: number) => (
          <ProductsCol
            key={index}
            style={type === 'book' ? { paddingLeft: 0, paddingRight: 1 } : {}}
          >
            <ProductCardWrapper>
              <Fade
                duration={800}
                delay={index * 10}
                style={{ height: '100%' }}
              >
                {renderCard(type, item)}
              </Fade>
            </ProductCardWrapper>
          </ProductsCol>
        ))}
      </ProductsRow>
      {loadMore && data.products.hasMore && (
        <ButtonWrapper>
          <Button
            onClick={handleLoadMore}
            loading={loadingMore}
            variant="secondary"
            style={{
              fontSize: 14,
            }}
            border="1px solid #f1f1f1"
          >
            <FormattedMessage id="loadMoreButton" defaultMessage="Load More" />
          </Button>
        </ButtonWrapper>
      )}
    </>
  );
};
export default Products;
