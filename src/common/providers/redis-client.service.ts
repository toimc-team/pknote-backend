import { Injectable } from '@nestjs/common';
import { RedisService } from '@liaoliaots/nestjs-redis';
import { Redis } from 'ioredis';

@Injectable()
export class RedisClientService {
  private _client: Redis;

  constructor(private readonly redisService: RedisService) {
    this._client = this.redisService.getClient('main');
  }

  async getClient(): Promise<Redis> {
    const client = this.redisService.getClient('main');
    return client;
  }

  async setValue(
    key: string,
    value: string,
    expiryMode?: string | any[],
    time?: number | string,
  ): Promise<boolean> {
    const result = await this._client.set(key, value, expiryMode, time);
    return result == 'OK';
  }

  async getValue(key: string): Promise<string | null> {
    const result = await this._client.get(key);
    return result;
  }

  async delKey(key: string): Promise<number> {
    return await this._client.del(key);
  }
}
