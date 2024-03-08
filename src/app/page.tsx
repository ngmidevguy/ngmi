
import PostHogClient from './posthog';
import { BlogCard } from '@/components'

const Home = () => {

  // const posthog = PostHogClient();

  // posthog.capture({
  //   distinctId: 'test-id',
  //   event: 'test-event'
  // })

  // Send queued events immediately. Use for example in a serverless environment
  // where the program may terminate before everything is sent
  // await posthog.shutdownAsync()

  return (
    <div>
      <BlogCard 
        date="october 17, 2023" 
        href="#" image="/img/300zx.jpg" 
        title="Making this blog with TypeScript, Next.JS App Router, and Styled-Components" 
        tags={["hi", "nextjs", "typescript"]}
      />
      <BlogCard 
        date="january 1, 2022" 
        href="#" image="https://i.pinimg.com/564x/a9/cf/e4/a9cfe49c439c5a6df72b73ea11f60e30.jpg" 
        title="Sheck Wes Need A Rari A Lambo" 
        tags={["cactusjack", "rapmusic", "nextup"]}
      />
    </div>
  );
}

export default Home;