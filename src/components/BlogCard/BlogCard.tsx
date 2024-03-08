"use client";

import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { displace_kc, garamond } from '@/constants/fonts';
import { breakpoints, sizes } from '@/constants/breakpoints';

const BlogCardInner = styled.div`
  @media ${breakpoints.sm} {
    width: 320px;
    margin: 0 auto;
    margin-bottom: ${sizes.md};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding-bottom: ${sizes.md};
    border-bottom: 2px solid ${props => props.theme.main.primary};
  }

  @media ${breakpoints.md} {
    width: 600px;
    margin-bottom: ${sizes.lg};
    padding-bottom: ${sizes.md};
    flex-direction: row;
  }

  @media ${breakpoints.lg} {
    width: 800px;
  }

  @media ${breakpoints.xl} {
    
  }

  @media ${breakpoints.xxl} {

  }

  @media ${breakpoints.xxxl} {

  }
`

BlogCardInner.defaultProps = {
  theme: {
    main: {
      primary: '#CECAC3'
    }
  }
}

const BlogTitle = styled.h1`
  line-height: 1.25;
  font-size: 32px;
  word-wrap: break-word;
  max-width: 500px;
  color: ${props => props.theme.main.primary};
  a:link, a:visited, a:hover, a:active {
    color: ${props => props.theme.main.primary};
    text-decoration: none;
  }

`;

BlogTitle.defaultProps = {
  theme: {
    main: {
      primary: '#CECAC3'
    }
  }
}

const BlogDate = styled.h2`
  font-size: 24px;
  line-height: 1.5;
  font-family: 'EB Garamond', serif;
  font-weight: 500;
`;

const BlogTags = styled.p`
  font-size: 16px;
  line-height: 1.5;
  font-family: 'EB Garamond', serif;
  a:link, a:visited, a:hover, a:active {
    color: ${props => (props.theme.main.name === 'dark') ? (props.theme.main.accent_2) : (props.theme.main.accent)} !important;
    text-decoration: none;
  }
`;

BlogTags.defaultProps = {
  theme: {
    main: {
      name: 'dark',
      accent_2: '#F7A554'
    }
  }
}



const BlogCard = (props: { date: string, href: string, image: string, title: string, tags: string[] }) => {
  return (
    <BlogCardInner>
      <div>
        <BlogDate className={garamond.className}>{props.date}</BlogDate>
        <BlogTitle className={displace_kc.className}><Link href={props.href}>{props.title}</Link></BlogTitle>
        <BlogTags className={garamond.className}>{props.tags.map((tag, idx) => (<Link href={`/blog/tags/${tag}`} className="hover:underline" key={idx}>#{tag}, </Link>))}</BlogTags>
      </div>
      <a>
        <Image src={props.image} alt={props.title} width={200} height={150} style={{ backgroundSize: 'cover' }} />
      </a>
    </BlogCardInner>
  );
}

export default BlogCard