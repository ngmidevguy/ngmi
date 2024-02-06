import { createGlobalStyle } from 'styled-components';
import { dark } from '@/colors';

export const GlobalStyles = createGlobalStyle`
  a:link, a:visited, a:hover, a:active {
    color: ${props => props.theme.main.primary};
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .animate-spin {
    animation: spin 1s linear infinite;
  }
  
  @keyframes ping {
    75%, 100% {
      transform: scale(2);
      opacity: 0;
    }
  }
  
  .animate-ping {
    animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
  
  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateY(-25%);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: translateY(0);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }
  
  .animate-bounce {
    animation: bounce 1s infinite;
  }

  body {
    padding: 0px 100px;
    color: ${props => props.theme.main.primary};
    background: ${props => props.theme.main.background};
    font-family: 'EB Garamond', serif;
  }

  h1 {
    border: 1px solid ${dark.main.accent};
  }

`; 
