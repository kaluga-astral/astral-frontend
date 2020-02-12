import React from 'react';

const Aside = React.forwardRef((props, ref) => {
  return <aside ref={ref} {...props} />;
});

export default Aside;
