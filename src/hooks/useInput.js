import React from 'react';

export const useInput = (initialValue) => {
  const [value, setValue] = React.useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(''),
    bind: {
      value,
      onChange: evt => {
        setValue(evt.target.value);
      }
    }
  };
}
