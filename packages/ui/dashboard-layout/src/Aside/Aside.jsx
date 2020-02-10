import React from 'react';
import AsideContext from './Context';

const asideRef = React.createRef();

const Aside = props => {
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  React.useEffect(() => {
    asideRef.current.addEventListener('transitionend', event => {
      event.stopPropagation();
      setIsTransitioning(false);
    });
  }, []);

  return (
    <AsideContext.Provider value={{ isTransitioning }}>
      <aside ref={asideRef} {...props} />
    </AsideContext.Provider>
  );
};

export default Aside;
