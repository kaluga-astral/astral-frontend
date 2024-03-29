import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@astral-frontend/styles';
import { Tooltip } from '@astral-frontend/components';

const useStyles = makeStyles(
  () => ({
    text: {
      display: 'block',
      maxWidth: '100%',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    },
  }),
  { name: 'TextOverflowTooltip' },
);

export const TextOverflowTooltip = ({ className, title, ...props }) => {
  const classes = useStyles();
  const ref = React.useRef();
  const [overflow, setOverflow] = React.useState(false);
  const [hover, setHover] = React.useState(false);

  const handleMouseEnter = React.useCallback(() => {
    setHover(true);
  }, []);

  const handleMouseLeave = React.useCallback(() => {
    setHover(false);
  }, []);

  const resizeObserver = React.useMemo(() => {
    return new ResizeObserver(([{ target }]) => {
      if (target.offsetWidth < target.scrollWidth) {
        setOverflow(true);
      } else {
        setOverflow(false);
      }
    });
  }, []);

  React.useEffect(() => {
    if (ref.current) {
      resizeObserver.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        return resizeObserver.unobserve(ref.current);
      }

      return undefined;
    };
  }, [ref.current]);

  return (
    <Tooltip {...props} title={title} open={hover && overflow}>
      <span
        ref={ref}
        className={cn(classes.text, className)}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...(overflow && {
          onMouseEnter: handleMouseEnter,
          onMouseLeave: handleMouseLeave,
        })}
      >
        {title}
      </span>
    </Tooltip>
  );
};

TextOverflowTooltip.defaultProps = {
  className: null,
};

TextOverflowTooltip.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default TextOverflowTooltip;
