import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { ButtonBase, Avatar, SvgIcon } from '@astral-frontend/components';
import { withStyles } from '@astral-frontend/styles';
import { ArrowIcon } from '@astral-frontend/icons';

const DashboardLayoutOrganizationSelectorCurrentOrganization = ({
  classes,
  className,
  name,
  ...props
}) => (
  <ButtonBase className={cn(classes.root)} {...props}>
    <div className={classes.currentOrganizationName}>{name}</div>
    <Avatar className={classes.avatar}>
      <SvgIcon viewBox="0 0 16 16" className={classes.icon}>
        <path d="M3.63645 0H15.2727C15.6749 0 16 0.325089 16 0.727269V12.3639C16.0001 12.4594 15.9813 12.554 15.9448 12.6423C15.9083 12.7306 15.8547 12.8108 15.7872 12.8783C15.7196 12.9459 15.6394 12.9995 15.5511 13.036C15.4629 13.0725 15.3683 13.0913 15.2727 13.0912H3.63645C3.23427 13.0912 2.90918 12.7661 2.90918 12.3639V0.727269C2.90918 0.325089 3.23427 0 3.63645 0ZM4.36373 11.6366H14.5454V1.45461H4.36373V11.6366ZM0 3.6362H1.45455V14.5454H12.3635V16H0.727276C0.325092 16 0 15.6749 0 15.2727V3.6362ZM8.75989 9.45378C8.74899 9.4545 8.73808 9.4545 8.72717 9.4545C8.63162 9.45474 8.53698 9.43603 8.44872 9.39944C8.36046 9.36285 8.28033 9.30911 8.21298 9.24134L6.39479 7.42317L7.42316 6.39473L8.67851 7.65007L11.8049 3.89795L12.9227 4.82965L9.28644 9.19334C9.22141 9.27075 9.14106 9.33386 9.05043 9.37868C8.95981 9.42351 8.86089 9.44907 8.75989 9.45378Z" />
      </SvgIcon>
    </Avatar>
    <ArrowIcon className={classes.arrow} />

  </ButtonBase>
);

DashboardLayoutOrganizationSelectorCurrentOrganization.defaultProps = {
  className: null,
};


DashboardLayoutOrganizationSelectorCurrentOrganization.propTypes = {
  classes: PropTypes.shape().isRequired,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default withStyles({
  root: {
    width: '269px',
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    fontSize: '14px',
    lineHeight: '19px',
  },
  avatar: {
    background: '#4E30C7',
  },
  icon: {
    width: '16px',
    height: '16px',
    background: '#4E30C7',

  },
  arrow: {
    width: '12px',
    height: '6px',
    marginRight: '16px',
  },
})(DashboardLayoutOrganizationSelectorCurrentOrganization);
