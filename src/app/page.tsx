
import PostHogClient from './posthog';
import { BlogCard } from '@/components'

const Home = async () => {

  // const posthog = PostHogClient();

  // posthog.capture({
  //   distinctId: 'test-id',
  //   event: 'test-event'
  // })

  // Send queued events immediately. Use for example in a serverless environment
  // where the program may terminate before everything is sent
  // await posthog.shutdownAsync()

  return (
    <div style={{ paddingTop: '60px', marginBottom: '60px' }}>
      <BlogCard date="october 17, 2023" href="#" image="/img/300zx.jpg" title="This Blog is Sick Bro" tags={["hi", "nextjs", "typescript"]}/>
    </div>
  );
}

export default Home;