import PropTypes from 'prop-types';
import { getMinutes, getSeconds } from 'date-fns';
import React from 'react';

import Box from '../Box';

const CountdownTimer = ({ time, dangerTime, onTimesUp, color, ...props }) => {
  const [deadline, setDeadline] = React.useState(time);
  const intervalId = React.useRef(null);

  React.useEffect(() => {
    intervalId.current = setInterval(() => {
      setDeadline(prevState => prevState - 1000);
    }, 1000);
  }, []);

  if (deadline <= 0) {
    clearInterval(intervalId.current);
    if (onTimesUp) {
      onTimesUp();
    }
  }

  const newColor = React.useMemo(
    () => (deadline <= dangerTime ? 'error.main' : color ?? 'primary.main'),
    [deadline, dangerTime, color],
  );
  const minutes = getMinutes(deadline);
  const seconds = getSeconds(deadline);

  return (
    <Box {...props} color={newColor}>
      <span>{minutes > 9 ? minutes : `0${minutes}`}</span>
      <span>:</span>
      <span>{seconds > 9 ? seconds : `0${seconds}`}</span>
    </Box>
  );
};

CountdownTimer.defaultProps = {
  color: null,
  dangerTime: null,
  onTimesUp: null,
};

CountdownTimer.propTypes = {
  color: PropTypes.string,
  // время в миллисекундах, когда таймер станет красным
  dangerTime: PropTypes.number,
  // время в миллисекундах, которое будет убывать
  time: PropTypes.number.isRequired,
  // callback, вызывающийся после истечения таймера
  onTimesUp: PropTypes.func,
};

export default CountdownTimer;
