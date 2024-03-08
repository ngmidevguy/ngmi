import { createGlobalStyle, keyframes } from 'styled-components';
import { dark } from '@/constants/themes';
import { sizes, breakpoints } from '@/constants/breakpoints';

// todo, make these unique per components, usage below
const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
// animation: ${spin} 2s linear infinite;

// todo, make these unique per components, usage below
const ping = keyframes`
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
`;
// animation: ${ping} 2s linear infinite;

// todo, make these unique per components, usage below
const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;
// animation: ${pulse} 2s linear infinite;

// todo, make these unique per components, usage below
const bounce = keyframes`
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
`;
// animation: ${bounce} 2s linear infinite;

export const GlobalStyles = createGlobalStyle`
  .animate-spin {
    animation: spin 1s linear infinite;
  }
  
  .animate-ping {
    animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
  }
  
  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  
  .animate-bounce {
    animation: bounce 1s infinite;
  }

  body {
    color: ${props => props.theme.main.primary};
    background: ${props => props.theme.main.background};
  }

  @media ${breakpoints.sm} {
    body {
      padding: 0px ${sizes.sm};
    }
  }

  @media ${breakpoints.md} {
    body {
      padding: ${sizes.md} ${sizes.sm};
    }
  }

  @media ${breakpoints.lg} {
    body {
      padding: ${sizes.lg} ${sizes.md};
    }
  }

  @media ${breakpoints.xl} {
    body{
      padding: ${sizes.xl} ${sizes.lg};
    }
  }

  @media ${breakpoints.xxl} {
    body{
      padding: ${sizes.xxl} ${sizes.xl};
    }
  }

  @media ${breakpoints.xxxl} {
    body {
      padding: ${sizes.xxxl} ${sizes.xxl};
    }
  }
`; 
