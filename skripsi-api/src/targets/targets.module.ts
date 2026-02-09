import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TargetsService } from './target.service';
import { TargetsController } from './target.controller';
import { TargetEntity } from './entities/target.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Target])],
  controllers: [TargetsController],
  providers: [TargetsService],
})
export class TargetsModule {}
