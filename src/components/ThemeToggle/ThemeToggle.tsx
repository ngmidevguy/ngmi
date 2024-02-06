'use client';

import Image from 'next/image';
import React, { useContext } from 'react';
import { ThemeContext } from '@/contexts/ThemeContext';



const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    theme === 'light' ? (
      <Image src="/img/light.svg" alt="Switch to light theme" width={24} height={24} onClick={toggleTheme} />
      // Render the dark vector when the theme is light, since clicking the image will switch to dark theme
      ) : (
        // Render the light vector when the theme is dark, since clicking the image will switch to light theme
        <Image src="/img/dark.svg" alt="Switch to dark theme" width={24} height={24} onClick={toggleTheme} />
    )
  );
};

export default ThemeToggle;
