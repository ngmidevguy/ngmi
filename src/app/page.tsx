
import PostHogClient from './posthog';


const Home = async () => {
  const posthog = PostHogClient();

  posthog.capture({
    distinctId: 'test-id',
    event: 'test-event'
  })

  // Send queued events immediately. Use for example in a serverless environment
  // where the program may terminate before everything is sent
  await posthog.shutdownAsync()

  return (
    <div>
      hello ngmi.dev
    </div>
  );
}

export default Home;