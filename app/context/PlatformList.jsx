'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { fetchPlatformList } from '../utils/fetchPlatformList';

const PlatformListContext = createContext();

export const PlatformListProvider = ({ children }) => {
  const [platforms, setPlatforms] = useState([]);

  const refresh = async () => {
    const connected = await fetchPlatformList();
    setPlatforms(connected);
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <PlatformListContext.Provider value={{ platforms, setPlatforms, refresh }}>
      {children}
    </PlatformListContext.Provider>
  );
};

export const getPlatformList = () => useContext(PlatformListContext);
