// config/redis.js
const Redis = require('ioredis');

console.log("process.env.REDIS_URLprocess.env.REDIS_URL", process.env.REDIS_URL);
const connection = new Redis(process.env.REDIS_URL, {
  maxRetriesPerRequest: null, // 🔥 Required by BullMQ
});

module.exports = connection;