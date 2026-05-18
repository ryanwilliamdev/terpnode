import { RateLimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

import dotenv from 'dotenv';

dotenv.config();

// create a rate limit instance with a sliding window of 20 seconds and a limit of 10 requests
const rateLimit = new RateLimit({
    redis: Redis.fromEnv(),
    limiter: Redis.slidingWindow({
        interval: 20, // 20 seconds
        limit: 10, // 10 requests
    }),
});

export default rateLimit;