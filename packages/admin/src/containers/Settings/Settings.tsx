import React, { useCallback } from 'react';
import SettingsCard from '../../components/SettingsCard/SettingsCard';
import { useDrawerDispatch } from '../../context/DrawerContext';
import { STAFF_MEMBERS, SITE_SETTINGS } from '../../settings/constants';
import { withStyle } from 'baseui';
import {
  SiteSettings,
  Members,
  OrderIcon,
  CouponIcon,
  SidebarCategoryIcon,
  ProductIcon,
} from '../../components/AllSvgIcon';
import { Grid, Row, Col as Column } from '../../components/FlexBox/FlexBox';
import { useHistory } from 'react-router-dom';

const Col = withStyle(Column, () => ({
  '@media only screen and (max-width: 767px)': {
    marginBottom: '20px',

    ':last-child': {
      marginBottom: 0,
    },
  },
}));

export default function Settings() {
  let history = useHistory();

  const dispatch = useDrawerDispatch();

  const openStaffForm = useCallback(
    () =>
      dispatch({ type: 'OPEN_DRAWER', drawerComponent: 'STAFF_MEMBER_FORM' }),
    [dispatch]
  );

  const openCategoryForm = useCallback(
    () => dispatch({ type: 'OPEN_DRAWER', drawerComponent: 'CATEGORY_FORM' }),
    [dispatch]
  );

  const openProductForm = useCallback(
    () => dispatch({ type: 'OPEN_DRAWER', drawerComponent: 'PRODUCT_FORM' }),
    [dispatch]
  );

  const openCouponForm = useCallback(
    () => dispatch({ type: 'OPEN_DRAWER', drawerComponent: 'CAMPAING_FORM' }),
    [dispatch]
  );

  return (
    <Grid fluid={true}>
      <Row>
        <Col md={6}>
          <SettingsCard
            icon={<Members />}
            title='Staff Members'
            subtitle='Manage your employees and their permission'
            onClick={() => history.push(STAFF_MEMBERS)}
          />
        </Col>
        <Col md={6}>
          <SettingsCard
            icon={<SiteSettings />}
            title='Site Settings'
            subtitle='View and update your site settings'
            onClick={() => history.push(SITE_SETTINGS)}
          />
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <SettingsCard
            icon={<ProductIcon width='56px' height='56px' />}
            title='Add Products'
            subtitle='Add products from here'
            onClick={openProductForm}
          />
        </Col>

        <Col md={6}>
          <SettingsCard
            icon={<SidebarCategoryIcon width='56px' height='56px' />}
            title='Add Categories'
            subtitle='Add product categories from here'
            onClick={openCategoryForm}
          />
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <SettingsCard
            icon={<OrderIcon width='56px' height='56px' />}
            title='Add Staff Members'
            subtitle='Add your staff members from here'
            onClick={openStaffForm}
          />
        </Col>
        <Col md={6}>
          <SettingsCard
            icon={<CouponIcon width='56px' height='56px' />}
            title='Add Coupons'
            subtitle='Add coupons from here'
            onClick={openCouponForm}
          />
        </Col>
      </Row>
    </Grid>
  );
}
