import React from 'react';
import {
  Typography,
  Box,
  IconButton,
  SvgIcon,
  Collapse,
} from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(
  theme => ({
    root: {
      flexGrow: 1,
      overflowY: 'auto',
    },
    counter: {
      height: '21px',
      minWidth: '32px',
      lineHeight: '21px',
      marginLeft: theme.spacing(2),
      padding: theme.spacing(0, 1),
      textAlign: 'center',
      borderRadius: `${theme.shape.borderRadius}px`,
      backgroundColor: theme.palette.primary.light,
    },
    list: {},
    listItem: {
      '&:hover $rowActions': {
        opacity: 1,
      },
    },
    rowActions: {
      opacity: 0,
      transition: theme.transitions.create(['opacity']),
    },
    expanderIcon: {
      flexShrink: 0,
      transition: theme.transitions.create(['transform']),
      transform: ({ expanded }) => {
        return expanded ? 'rotateZ(0deg)' : 'rotateZ(180deg)';
      },
    },
  }),
  { name: 'TransferTemplatedDataList' },
);

export const TransferTemplatedDataListSection = ({
  title,
  count,
  children,
  ...props
}) => {
  const [expanded, setExpanded] = React.useState(true);
  const classes = useStyles({ expanded });

  const handleExpanderButtonClick = React.useCallback(() => {
    setExpanded(prevValue => !prevValue);
  }, []);

  return (
    <Box {...props} display="flex" flexDirection="column" maxHeight="50%">
      <Box display="flex">
        <Box display="inline-flex" flexGrow={1}>
          <Typography gutterBottom color="primary">
            {title}
          </Typography>
          <Box className={classes.counter}>{count}</Box>
        </Box>
        <IconButton disabled={count === 0} onClick={handleExpanderButtonClick}>
          <SvgIcon className={classes.expanderIcon}>
            <path
              d="M6.09448 14.7368L6.28545 14.9127C6.41187 15.0291 6.61629 15.0291 6.74271 14.9127L11.9985 10.0706L17.257 14.9127C17.3834 15.0291 17.5878 15.0291 17.7142 14.9127L17.9052 14.7368C18.0316 14.6204 18.0316 14.4322 17.9052 14.3158L12.2298 9.08731C12.1034 8.9709 11.899 8.9709 11.7725 9.08731L6.09717 14.3158C5.96806 14.4322 5.96806 14.6204 6.09448 14.7368Z"
              fill="#1D3F66"
            />
          </SvgIcon>
        </IconButton>
      </Box>
      <Box overflow="auto">
        <Collapse in={expanded}>{children}</Collapse>
      </Box>
    </Box>
  );
};

export default TransferTemplatedDataListSection;
