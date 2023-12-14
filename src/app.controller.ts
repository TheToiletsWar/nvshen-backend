// src/app.controller.ts
import { Body, Controller, Get, Put } from '@nestjs/common';
import { RedisService } from './redis/redisService';

@Controller()
export class AppController {
  constructor(private readonly redisService: RedisService) {}

  @Get('getladylist')
  async getData() {
    const client = this.redisService.getClient();
    const data = await client.get('nvshen');
    return JSON.parse(data);
  }

  @Put('setladylist')
  async writeLadyList(@Body() ladyList: Array<string>) {
    const client = this.redisService.getClient();
    await client.set('nvshen', JSON.stringify(ladyList));
    return null;
  }
}
