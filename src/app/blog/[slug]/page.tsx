import { getPostBySlug, getPostSlugs } from '@/lib/posts';
import { CustomMDX } from '@/components/CustomMDX';
import { displace_kc, garamond } from '@/constants/fonts';

const generateStaticParams = async () => {
  return getPostSlugs().then((slugs) => slugs.map((slug) => ({ slug })));
}

const readingTime = (content: string) => {
  const wordsPerMinute = 200;
  const words = content.split(' ');
  const minutes = Math.ceil(words.length / wordsPerMinute);
  return `${minutes} min read`;
}

const BlogPage = (post: any) => {
  post = post.post;
  return (
    <div style={{
      margin: '0px 100px 0px 100px',
    }}>
      <div style={{
        backgroundImage: `url(${post.data.heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '75vh',
      }}>

      </div>
      <h1 className={displace_kc.className}
        style={{
          textAlign: 'center',
          fontSize: '64px',
          fontWeight: '400',
          borderBottom: '1px solid #303030',
          borderTop: '1px solid #303030',
          paddingTop: '35px',
          paddingBottom: '25px',
          margin: 0,
        }}>
        {post.data.title}
      </h1>
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderBottom: '1px solid #303030',
      }}>
        <p className={garamond.className} style={{
          flex: '1',
          margin: '0',
          padding: '24px 0px 24px 0px',
          textAlign: 'center',
          borderRight: '1px solid #303030',
          fontSize: '20px',
          fontWeight: '400',
        }}>
          {(new Date(post.data.createdAt))
            .toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
            .toLowerCase()}
        </p>
        <p className={garamond.className} style={{
          flex: '1',
          margin: '0',
          padding: '24px 0px 24px 0px',
          textAlign: 'center',
          borderRight: '1px solid #303030',
          fontSize: '20px',
          fontWeight: '400',
        }}>
          {readingTime(post.content)}
        </p>
        <ul className={garamond.className} style={{
          flex: '1',
          listStyleType: 'none',
          margin: '0',
          padding: '24px 0px 24px 0px',
          textAlign: 'center',
          fontSize: '20px',
          fontWeight: '400',
        }}>
          {post.data.tags.map((tag: string, idx: number) => (<li style={{ display: 'inline' }} key={idx}>#{tag}, </li>))}
        </ul>
      </div>
      <div style={{
        padding: '0px 100px 0px 100px',
        borderBottom: '1px solid #303030',
      }}>
        <CustomMDX source={post.content} style={{
          borderRight: '1px solid #303030',
          borderLeft: '1px solid #303030',
          padding: '100px',
        }}/>
      </div>
    </div>
  );
}

const PostPage = async ({ params }: { params: { slug: string } }) => {
  const post = await getPostBySlug(params.slug);
  return (
    <BlogPage post={post} />
  );
}
export default PostPage;