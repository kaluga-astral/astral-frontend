import PropTypes from 'prop-types';

const getPositionInTitlesArray = (n) => {
  if (n % 10 === 1 && n % 100 !== 11) {
    return 0;
  }

  if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) {
    return 1;
  }

  return 2;
};

const DeclensionOfNumber = ({ value, titles }) => titles[getPositionInTitlesArray(value)];

DeclensionOfNumber.defaultProps = {};

DeclensionOfNumber.propTypes = {
  value: PropTypes.number.isRequired,
  titles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DeclensionOfNumber;
