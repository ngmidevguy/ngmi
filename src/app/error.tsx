"use client";

import { useEffect } from 'react'
import { displace_kc, garamond } from '@/constants/fonts';
import styled from 'styled-components';

const ErrorButton = styled.button`
  font-family: ${garamond.className};
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.main.primary};
`

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <div style={{padding: '100px'}}>
      <h2 className={displace_kc.className}>Something went wrong!</h2>
      <ErrorButton
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </ErrorButton>
    </div>
  )
}