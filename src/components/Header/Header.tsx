"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components'

import { ThemeToggleButton } from '@/components';
import Link from 'next/link';
import { breakpoints, sizes } from '@/constants/breakpoints';

const HeaderInner = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${breakpoints.sm} {
    padding: 8px ${sizes.sm};
  }

  @media ${breakpoints.md} {
    padding: ${sizes.md} ${sizes.sm};
  }

  @media ${breakpoints.lg} {
    padding: ${sizes.lg} ${sizes.md};
  }

  @media ${breakpoints.xl} {
    padding: ${sizes.xl} ${sizes.lg};
  }

  @media ${breakpoints.xxl} {
    padding: ${sizes.xxl} ${sizes.xl};
  }

  @media ${breakpoints.xxxl} {

  }
`

const Logo = styled.div`
  background: url(${props => props.theme.images.background});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  @media ${breakpoints.sm} {
    width: 35px;
    height: 25px;
  }

  @media ${breakpoints.md} {
    width: 76px;
    height: 50px;
  }
  width: 76px;
  height: 50px;
`

Logo.defaultProps = {
  theme: {
    images: {
      background: '/img/ngmi_light.png'
    }
  }
}

const Nav = styled.nav`
  display: flex;
  gap: 24px;
  align-items: center;
  a:link, a:visited, a:hover, a:active {
    color: ${props => props.theme.main.primary};
    text-decoration: none;
  }
`
Nav.defaultProps = {
  theme: {
    main: {
      primary: '#1F2122'
    }
  }
}

const Header = () => {
  return (
    <HeaderInner style={{
      padding: '20px 100px 20px 100px',
    }}>
      <Link href='/'><Logo /></Link>
      <Nav id="icons">
        <Link href='/links'>Links</Link>
        <a title="ngmidevguy twitter" href="https://twitter.com/ngmidevguy" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} style={{ fontSize: '24px' }} /></a>
        <ThemeToggleButton />
      </Nav>
    </HeaderInner>
  );
}

export default Header