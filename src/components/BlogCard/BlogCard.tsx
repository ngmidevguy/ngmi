"use client";

import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { displace_kc } from '@/constants/fonts';

const BlogCardInner = styled.div`
  width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 24px;
  border-bottom: 2px solid ${props => props.theme.main.primary};
`

BlogCardInner.defaultProps = {
  theme: {
    main: {
      primary: '#CECAC3'
    }
  }
}

const BlogTitle =  styled.h1`
  line-height: 1.25;
  font-size: 32px;
`;

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
  color: ${props => props.theme.main.accent};
`;

BlogTags.defaultProps = {
  theme: {
    main: {
      accent: '#2980B9'
    }
  }
}

const BlogCard = (props: {date: string, href: string, image: string, title: string, tags: string[]}) => {
  return (
    <BlogCardInner>
      <div>
        <BlogDate>{props.date}</BlogDate>
        <Link href={props.href}><BlogTitle className={displace_kc.className}>{props.title}</BlogTitle></Link>
        <BlogTags>{props.tags.map((tag) => `#${tag}`).join(', ')}</BlogTags>
      </div>
      <a>
        <Image src={props.image} alt={props.title} width={200} height={150} style={{backgroundSize: 'cover'}} />
      </a>
    </BlogCardInner>
  );
}

export default BlogCard