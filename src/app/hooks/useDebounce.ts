import { useEffect, useState } from 'react';

const useDebounce = (value: string, delayTime: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const time = setTimeout(() => {
      setDebouncedValue(value);
    }, delayTime);

    return () => clearTimeout(time);
  }, [value, delayTime]);

  return debouncedValue;
};

export default useDebounce;
