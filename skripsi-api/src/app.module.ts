import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './database/typeorm.config';
import { TargetsModule } from './targets/targets.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TargetsModule,
  ],
})
export class AppModule {}
