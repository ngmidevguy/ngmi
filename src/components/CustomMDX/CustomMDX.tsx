import { MDXRemote } from "next-mdx-remote/rsc"
import { garamond } from '@/constants/fonts';

const CustomH1: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = (
  props: React.HTMLAttributes<HTMLHeadingElement>
) => (
  <h1 {...props} style={{
    lineHeight: '1.5',
    color: 'green',
  }}>
    {props.children}
  </h1>
)

const CustomH2: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = (
  props: React.HTMLAttributes<HTMLHeadingElement>
) => (
  <h2 {...props} style={{
    color: 'blue',
  }}>
    {props.children}
  </h2>
)


const CustomP: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = (
  props: React.HTMLAttributes<HTMLParagraphElement>
) => (
  <p className={garamond.className} style={{
    letterSpacing: '0.15px',
    fontSize: '20px',
  }}>
    {props.children}
  </p>
)

const CustomBlockquote: React.FC<React.HTMLAttributes<HTMLQuoteElement>> = (props: React.HTMLAttributes<HTMLQuoteElement>) => (
  <blockquote {...props} className={garamond.className} style={{
    // margin: top, right, bottom, left
    margin: '0px -200px 0px -200px',
    padding: '50px 0px 50px 0px',
    borderTop: '1px solid #303030',
    borderBottom: '1px solid #303030',
    backgroundColor: '#F2F2F2',
    zIndex: '10',
    textAlign: 'center',
    textTransform: 'uppercase',
  }}>
    {props.children}
  </blockquote>
)

const components: Record<
  string,
  React.FC<React.HTMLAttributes<HTMLElement>>
> = {
  h1: CustomH1,
  h2: CustomH2,
  p: CustomP,
  blockquote: CustomBlockquote,
}

interface CustomMDXProps {
  source: string;
  style?: React.CSSProperties;
}

const CustomMDX: React.FC<CustomMDXProps> = (props: CustomMDXProps) => {
  return (
    <div style={props.style}>
      <MDXRemote
        {...props}
        components={{ ...components }}
      />
    </div>
  )
}

export default CustomMDX