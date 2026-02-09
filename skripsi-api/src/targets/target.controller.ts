import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { TargetsService } from './target.service';
import { CreateTargetDto } from './dto/create-target.dto';

@Controller('targets')
export class TargetsController {
  constructor(private readonly targetsService: TargetsService) {}

  // 🔹 Tabel target IKU & PK
  @Get()
  findAll() {
    return this.targetsService.findAll();
  }

  // 🔔 Notifikasi target baru
  @Get('new')
  findNew() {
    return this.targetsService.findNewTargets();
  }

  // ➕ Tambah target
  @Post()
  create(@Body() dto: CreateTargetDto) {
    return this.targetsService.create(dto);
  }

  // 📊 Update capaian
  @Patch(':id/capaian/:value')
  updateCapaian(
    @Param('id') id: number,
    @Param('value') value: number,
  ) {
    return this.targetsService.updateCapaian(id, value);
  }
}
