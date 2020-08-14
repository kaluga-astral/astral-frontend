import React from 'react';
import FormGridSection from './FormGridSection';
import FormGridSectionTitle from './FormGridSectionTitle';

FormGridSection.Title = props => {
  console.error(
    'FormGridSection.Title is deprecated use <FormGridSection title="Title" /> insted',
  );

  return <FormGridSectionTitle {...props} />;
};

export default FormGridSection;
