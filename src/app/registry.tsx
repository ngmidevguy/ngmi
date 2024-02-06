'use client'

import React, { useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager, ThemeProvider as StyledThemeProvider } from 'styled-components'
import { ThemeProvider, ThemeContext } from '@/contexts/ThemeContext'
import { GlobalStyles } from '@/styles';
import { themes } from '@/colors';

export default function StyledComponentsRegistry({ children }: { children: React.ReactNode }) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    styledComponentsStyleSheet.instance.clearTag()
    return <>{styles}</>
  })

  if (typeof window !== 'undefined') {
    return (
      <>
        <ThemeProvider>
          <ThemeContext.Consumer>
            {({ theme }) => (
              <StyledThemeProvider theme={themes[theme as keyof typeof themes]}>
                <GlobalStyles />
                {children}
              </StyledThemeProvider>
            )}
          </ThemeContext.Consumer>
        </ThemeProvider>
      </>)
  }

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  )
}