import {
  Controller,
  Get,
  Patch,
  Param,
  Body,
} from '@nestjs/common'
import { DashboardService } from './dashboard.service'

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly service: DashboardService) {}

  // GET /dashboard/targets
  @Get('targets')
  getDashboard() {
    return this.service.findAll()
  }

  // PATCH /dashboard/targets/:id/capaian
  @Patch('targets/:id/capaian')
  updateCapaian(
    @Param('id') id: string,
    @Body('capaian') capaian: number,
  ) {
    return this.service.updateCapaian(+id, capaian)
  }
}
