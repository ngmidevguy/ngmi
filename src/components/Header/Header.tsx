"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components'

import ThemeToggleButton from '@/components/ThemeToggle/ThemeToggle';

const HeaderInner = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 100px;
`

const Logo = styled.div`
  background: url(${props => props.theme.images.background});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 76px;
  height: 50px;
`

Logo.defaultProps = {
  theme: {
    images: {
      background: '/img/ngmi_dark.png'
    }
  }
}

const Nav = styled.nav`
  display: flex;
  gap: 24px;
  align-items: center;
`

const Header = () => {
  return (
    <HeaderInner>
      <Logo />
      <Nav id="icons">
        <a href="https://twitter.com/ngmidevguy" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} style={{ fontSize: '24px' }} /></a>
        <ThemeToggleButton />
      </Nav>
    </HeaderInner>
  );
}

export default Header