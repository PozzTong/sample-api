import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UnauthorizedException,
} from '@nestjs/common';
import { AppService } from './app.service';
import { createAppDTO } from './app.dto';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('users')
  getHello(): string {
    return this.appService.getHello();
  }

  // @Post(':id')
  // insertUser(@Param() { id }: any, @Query() queyr: any) {
  //   console.log('body: ', id);
  //   if (!id) throw new UnauthorizedException('please give userId');

  //   return {
  //     // testin: 1,
  //     // name: 'testing',
  //     filterParam: id,
  //     queryPara: queyr,
  //     // ...body,
  //   };
  // }

  @Post('createapp')
  createApp(@Body() body: createAppDTO) {
    return {
      date: new Date(),
      body,
    };
  }
}
