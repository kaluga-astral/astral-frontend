import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { makeStyles } from '@astral-frontend/styles';
import { CircularProgress } from '@astral-frontend/core';
import TableCell from '../TableCell';
import { __Context as TableRowContext } from '../TableRow';
import IconTableCellDefaultSelector from './IconTableCellDefaultSelector';

const useStyles = makeStyles(theme => ({
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: '36px',
    height: '36px',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  progressWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
  },
  icon: {
    color: theme.palette.grey[300],
    transform: 'scale(0.8)',
    transition: 'all 0.3s ease-in-out',
  },
  iconDownloaded: {
    color: theme.palette.primary.main,
    transform: 'scale(1)',
  },
  iconError: {
    color: theme.palette.error.main,
  },
  fab: {
    minHeight: '20px',
    width: '20px',
    height: '20px',
    backgroundColor: 'transparent',
    border: `1px solid ${theme.palette.primary.main}`,
    boxShadow: 'none',
    color: theme.palette.primary.main,
  },
  checkIcon: {
    width: '20px',
    height: '20px',
  },
}));

const IconTableCell = ({
  loading,
  selected,
  error,
  percentCompleted,
  Icon,
  ErrorIcon,
  renderSelector,
  onChange,
}) => {
  const classes = useStyles();
  const { hovered: tableRowHovered } = React.useContext(TableRowContext);

  return (
    <TableCell align="center">
      {(tableRowHovered || selected) && !loading ? (
        <div className={classes.content}>{renderSelector({ selected, onChange })}</div>
      ) : (
        <div className={classes.content}>
          {error ? (
            <ErrorIcon className={classes.iconError} />
          ) : (
            <Icon className={cn(classes.icon, { [classes.iconDownloaded]: !loading })} />
          )}
          {loading && !error ? (
            <div className={classes.progressWrapper}>
              <CircularProgress
                size={36}
                className={classes.progress}
                variant={percentCompleted ? 'static' : 'indeterminate'}
                value={percentCompleted}
              />
            </div>
          ) : null}
        </div>
      )}
    </TableCell>
  );
};

IconTableCell.defaultProps = {
  error: null,
  percentCompleted: null,
  ErrorIcon: null,
  renderSelector: IconTableCellDefaultSelector,
  onChange: null,
};

IconTableCell.propTypes = {
  loading: PropTypes.bool.isRequired,
  selected: PropTypes.bool.isRequired,
  error: PropTypes.instanceOf(Error),
  percentCompleted: PropTypes.number,
  Icon: PropTypes.func.isRequired,
  ErrorIcon: PropTypes.func,
  renderSelector: PropTypes.func,
  onChange: PropTypes.func,
};

export default IconTableCell;
