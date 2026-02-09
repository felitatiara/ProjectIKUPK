import { Module } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { DashboardController } from './dashboard.controller';
import { TargetsModule } from '@/targets/targets.module';

@Module({
  imports: [TargetsModule],
  controllers: [DashboardController],
  providers: [DashboardService],
})
export class DashboardModule {}
