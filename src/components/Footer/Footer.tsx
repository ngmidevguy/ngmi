"use client";

import styled from 'styled-components'
import { garamond } from '@/constants/fonts';
import Link from 'next/link';

const FooterInner = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
`

const FooterText = styled.p`
  font-family: ${garamond.className};
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  a:link, a:visited, a:hover, a:active {
    color: ${props => props.theme.main.primary};
    text-decoration: none;
  }
`

FooterText.defaultProps = {
  theme: {
    main: {
      primary: '#1F2122'
    }
  }
}

const Footer = () => {
  return (
    <FooterInner>
      <FooterText><Link href="/">{`>`} ngmi.dev</Link> &nbsp;&nbsp;⇒&nbsp;&nbsp; &copy; {new Date().getFullYear()}</FooterText>
    </FooterInner>
  )
}

export default Footer