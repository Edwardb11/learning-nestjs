import { Module, Global } from '@nestjs/common';
import { Client } from 'pg';

const API_KEY = '12345634';
const API_KEY_PROD = 'PROD1212121SA';
const client = new Client({
  // 👈 client
  user: 'root',
  host: 'localhost',
  database: 'my_db',
  password: '123456',
  port: 54320,
});

client.connect();
@Global()
@Module({
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
    },
    {
      provide: 'PG',
      useValue: client, // 👈 provider as value
    },
  ],
  exports: ['API_KEY', 'PG'],
})
export class DatabaseModule {}
