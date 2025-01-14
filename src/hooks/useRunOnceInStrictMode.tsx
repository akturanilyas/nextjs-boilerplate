import { useEffect, useRef } from 'react';

const useRunOnceInStrictMode = (callback: () => void, dependencies: Array<unknown> = []) => {
  const ref = useRef<boolean>(false);

  useEffect(() => {
    if (!ref.current) {
      ref.current = true;

      return callback();
    }
  }, [...dependencies]);
};

export default useRunOnceInStrictMode;
