import redis from 'redis';
import { promisify } from 'util';
import { app } from '../../configs';

const { REDIS_HOST, REDIS_PORT } = app;
const redisOpt = {
  host: REDIS_HOST,
  port: REDIS_PORT,
};
const client = redis.createClient(redisOpt);

export const cacheGet = promisify(client.get).bind(client);
export const cacheSet = promisify(client.set).bind(client);
export const cacheIncr = promisify(client.incr).bind(client);
export const cacheDecr = promisify(client.decr).bind(client);
export const cacheHSet = promisify(client.hset).bind(client);
export const cacheHGet = promisify(client.hget).bind(client);
export const cacheHGetAll = promisify(client.hgetall).bind(client);
export const cacheHDel = promisify(client.hdel).bind(client);
export const cacheDel = promisify(client.del).bind(client);
export const cacheKeys = promisify(client.keys).bind(client);
// Continued
