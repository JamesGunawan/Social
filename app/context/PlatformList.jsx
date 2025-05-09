'use client';

import { createContext, use, useContext, useEffect, useState } from 'react';
import { fetchPlatformList } from '../utils/fetchPlatformList';

const PlatformListContext = createContext();

export const PlatformListProvider = ({ children }) => {
    const [platforms, setPlatforms] = useState([]); // Each item: { name, data }
  
    useEffect(() => {
      const loadPlatforms = async () => {
        const connected = await fetchPlatformList();
        setPlatforms(connected);
      };
  
      loadPlatforms();
    }, []);
  
    return (
      <PlatformListContext.Provider value={{ platforms, setPlatforms }}>
        {children}
      </PlatformListContext.Provider>
    );
  };  

export const getPlatformList = () => useContext(PlatformListContext);
