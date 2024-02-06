"use client";

import styled from 'styled-components'
import { garamond } from '@/constants/fonts';

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
`

const Footer = () => {
  return (
    <FooterInner>
      <FooterText> {`>`} ngmi.dev &middot; &copy; {new Date().getFullYear()}</FooterText>
    </FooterInner>
  )
}

export default Footer