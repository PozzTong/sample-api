import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { SaleModule } from './sale/sale.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sale } from './sale/entities/sale.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: 'dev.env' }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3366,
      username: 'root',
      password: 'Pass@1122',
      database: 'sale',
      // entities: [__dirname + 'src/**/*.entity.{ts,js}'],
      entities: [Sale],
      // database: 'sale',
      // entities: [Sale],
      synchronize: true,
    }),
    AuthModule,
    SaleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
