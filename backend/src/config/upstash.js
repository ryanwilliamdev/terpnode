import { RateLimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

import dotenv from 'dotenv';

dotenv.config();

// create a rate limit instance with a sliding window of 20 seconds and a limit of 10 requests
const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Redis.slidingWindow({
        interval: '1m', // 1 minute
        limit: 100, // 100 requests
    }),
});

export default ratelimit;