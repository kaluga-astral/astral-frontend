import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { OrganizationNotFoundIcon } from '@astral-frontend/icons';
import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(
  theme => ({
    root: {
      width: '270px',
      height: '250px',
      background: theme.palette.common.white,
      boxShadow: theme.shadows[2],
      borderRadius: theme.shape.borderRadius,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    link: {
      fontSize: theme.typography.pxToRem(10),
      lineHeight: theme.typography.pxToRem(14),
      color: theme.palette.primary.main,
    },
    icon: {
      width: '74px',
      height: '66px',
    },
    text: {
      width: '222px',
      fontSize: theme.typography.pxToRem(12),
      lineHeight: theme.typography.pxToRem(16),
      textAlign: 'center',
      color: 'rgba(29, 63, 102, 0.62)',
    },
  }),
  { name: 'AbonentsSelectorEmptyStateComponent' },
);

const AbonentsSelectorEmptyStateComponent = ({
  className,
  name,
  addLinkHref,
  ...props
}) => {
  const classes = useStyles();
  return (
    <div className={cn(classes.root, className)} {...props}>
      <OrganizationNotFoundIcon className={classes.icon} />
      <div className={classes.text}>
        <p>
          Мы не нашли других Ваших компаний. Добавьте их в систему, чтобы удобно
          отслеживать документооборот
        </p>
      </div>
      <Link className={classes.link} to={addLinkHref}>
        добавить организацию
      </Link>
    </div>
  );
};

AbonentsSelectorEmptyStateComponent.defaultProps = {
  className: null,
  name: null,
};

AbonentsSelectorEmptyStateComponent.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  addLinkHref: PropTypes.string.isRequired,
};

export default AbonentsSelectorEmptyStateComponent;
