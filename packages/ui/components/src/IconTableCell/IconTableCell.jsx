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
  downloadedIcon: {
    color: theme.palette.primary.main,
    transform: 'scale(1)',
  },
  errorIcon: {
    color: theme.palette.error.main,
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
  SelectorComponent,
  onChange,
}) => {
  const classes = useStyles();
  const { hovered: tableRowHovered } = React.useContext(TableRowContext);
  const shouldSelectorComponentBeRendered = (tableRowHovered || selected) && !loading;

  const renderStatus = () => {
    if (error) return <ErrorIcon className={classes.errorIcon} />;

    if (loading) {
      return (
        <>
          <Icon className={cn(classes.icon, { [classes.downloadedIcon]: !loading })} />
          <div className={classes.progressWrapper}>
            <CircularProgress
              size={36}
              className={classes.progress}
              variant={percentCompleted === null ? 'indeterminate' : 'static'}
              value={percentCompleted}
            />
          </div>
        </>
      );
    }

    return <Icon className={cn(classes.icon, { [classes.downloadedIcon]: !loading })} />;
  };

  return (
    <TableCell align="center">
      <div className={classes.content}>
        {shouldSelectorComponentBeRendered ? (
          <SelectorComponent selected={selected} onChange={onChange} />
        ) : (
          renderStatus()
        )}
      </div>
    </TableCell>
  );
};

IconTableCell.defaultProps = {
  selected: null,
  error: null,
  loading: null,
  percentCompleted: null,
  SelectorComponent: IconTableCellDefaultSelector,
  onChange: null,
};

IconTableCell.propTypes = {
  loading: PropTypes.bool,
  selected: PropTypes.bool,
  error: PropTypes.instanceOf(Error),
  percentCompleted: PropTypes.number,
  Icon: PropTypes.func.isRequired,
  ErrorIcon: PropTypes.func.isRequired,
  /*
   * SelectorComponent - компонент, который
   * отобразится, если selected = true
   */
  SelectorComponent: PropTypes.func,
  onChange: PropTypes.func,
};

export default IconTableCell;
