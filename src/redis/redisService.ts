// src/redis/redis.service.ts
import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisService {
  private readonly client: Redis;

  constructor() {
    this.client = new Redis({
      host: '192.168.8.120',
      port: 6379,
    });
  }

  getClient(): Redis {
    return this.client;
  }
}
