import { Injectable } from '@nestjs/common';
import { TargetService } from '@/targets/target.service';
import { DashboardResponseDto } from './dto/dashboard.response.dto';

@Injectable()
export class DashboardService {
  constructor(
    private readonly targetService: TargetService,
  ) {}

  async findAll(): Promise<DashboardResponseDto> {
    const targets = await this.targetService.findAll();

    return {
      totalTarget: targets.length,
      targetBaru: targets.filter(t => t.isNew).length,
      selesai: targets.filter(t => t.statusAksi === 'selesai').length,
      data: targets,
    };
  }
}
