import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { OrganizationNotFoundIcon } from '@astral-frontend/icons';
import { withStyles } from '@astral-frontend/styles';

const OrganizationSelectorNotFoundPlaceholder = ({
  classes,
  className,
  name,
  addLinkHref,
  ...props
}) => (
  <div className={cn(classes.root, className)} {...props}>
    <OrganizationNotFoundIcon className={classes.icon} />
    <div className={classes.text}>
      <p>
        Мы не нашли других ваших компаний. Добавьте их в систему чтобы удобно отслеживать
        документоооборт
      </p>
    </div>
    <Link className={classes.link} to={addLinkHref}>
      добавить огранизацию
    </Link>
  </div>
);

OrganizationSelectorNotFoundPlaceholder.defaultProps = {
  className: null,
};

OrganizationSelectorNotFoundPlaceholder.propTypes = {
  classes: PropTypes.shape().isRequired,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  addLinkHref: PropTypes.string.isRequired,
};

export default withStyles({
  root: {
    width: '270px',
    height: '250px',
    background: '#FFFFFF',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.09)',
    borderRadius: '5px',
    fontFamily: 'Manrope',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    fontSize: '10px',
    lineHeight: '14px',
    color: '#6746EB',
  },
  icon: {
    width: '74px',
    height: '66px',
  },
  text: {
    width: '222px',
    fontSize: '12px',
    lineHeight: '16px',
    textAlign: 'center',
    color: 'rgba(29, 63, 102, 0.62)',
  },
})(OrganizationSelectorNotFoundPlaceholder);
