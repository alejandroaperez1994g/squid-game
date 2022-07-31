import { useState } from 'react';

const useToggle = () => {
  const [state, setState] = useState(false);

  const onToggle = () => {
    setState((prevState) => !prevState);
  };
  return { state, onToggle };
};

export default useToggle;
