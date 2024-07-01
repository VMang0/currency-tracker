import { useLayoutEffect, useState } from 'react';

import { device } from '@styled/breakPoints';

export const useScreenSize = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const checkScreenSize = () => {
    const isSmall = window.matchMedia(`(${device.sm})`).matches;
    setIsSmallScreen(isSmall);
  };

  useLayoutEffect(() => {
    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return { isSmallScreen };
};
