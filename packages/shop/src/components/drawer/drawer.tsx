import React, { Fragment } from 'react';
import RcDrawer from 'rc-drawer';

type DrawerProps = {
  className?: string;
  children?: any;
  closeButton?: any;
  closeButtonStyle?: any;
  drawerHandler: any;
  toggleHandler: any;
  open: any;
  width?: string;
  placement?: 'left' | 'right' | 'top' | 'bottom';
};

const Drawer: React.FunctionComponent<DrawerProps> = ({
  className,
  children,
  closeButton,
  closeButtonStyle,
  drawerHandler,
  toggleHandler,
  open,
  width,
  placement,
  ...props
}) => {
  return (
    <Fragment>
      <RcDrawer
        open={open}
        onClose={toggleHandler}
        className={`drawer ${className ? className : ''}`.trim()}
        width={width}
        placement={placement}
        handler={false}
        level={null}
        duration=".4s"
        {...props}
      >
        {closeButton && (
          <div
            className="drawer__close"
            onClick={toggleHandler}
            style={closeButtonStyle}
          >
            {closeButton}
          </div>
        )}

        {children}
      </RcDrawer>
      <div
        className="drawer__handler"
        style={{ display: 'inline-block' }}
        onClick={toggleHandler}
      >
        {drawerHandler}
      </div>
    </Fragment>
  );
};

Drawer.defaultProps = {
  width: '300px',
  placement: 'left',
};

export default Drawer;
