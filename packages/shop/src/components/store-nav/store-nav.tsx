import React from 'react';
import NavLink from 'components/nav-link/nav-link';
import StoreNavWrapper, { StoreNavLinks } from './store-nav.style';

type StoreNavProps = {
  className?: string;
  items?: any[];
};

const StoreNav: React.FunctionComponent<StoreNavProps> = ({
  className,
  items = [],
}) => {
  return (
    <StoreNavWrapper className={className}>
      <StoreNavLinks>
        {items.map((item, index) => (
          <NavLink
            className="store-nav-link"
            href={item.href}
            label={item.defaultMessage}
            intlId={item.id}
            dynamic={item.dynamic}
            key={index}
          />
        ))}
      </StoreNavLinks>
    </StoreNavWrapper>
  );
};

export default StoreNav;
