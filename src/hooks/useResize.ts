import { useCallback, useEffect, useState } from 'react';

import debounce from 'utils/debounce';

type Sizes = {
  width: number;
  height: number;
};

export const useResize = () => {
  const [sizes, setSizes] = useState<Sizes>({
    width: 0,
    height: 0,
  });

  const handleResize = useCallback(() => {
    setSizes({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', debounce(handleResize, 100));

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return sizes;
};
