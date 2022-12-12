const authConfig = {
  secret: process.env.APP_SECRET,
  tokenExpiryTime: 300, // seconds => 5 minutes
  redisServerPort: process.env.REDIS_PORT || 6379,
  redisServerURL: process.env.REDIS_URL || '127.0.0.1',
  redisConnectionString: process.env.REDIS_URL,
  redisServerPassword: process.env.REDIS_SERVER_PASS,
};

export { authConfig };
