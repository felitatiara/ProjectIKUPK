import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Target } from './entities/target.entity';
import { CreateTargetDto } from './dto/create-target.dto';

@Injectable()
export class TargetsService {
  constructor(
    @InjectRepository(Target)
    private targetRepo: Repository<Target>,
  ) {}

  findAll() {
    return this.targetRepo.find({
      order: { tenggat: 'ASC' },
    });
  }

  findNewTargets() {
    return this.targetRepo.find({
      where: { isNew: true },
    });
  }

  create(dto: CreateTargetDto) {
    const target = this.targetRepo.create({
      ...dto,
      tenggat: new Date(dto.tenggat),
    });
    return this.targetRepo.save(target);
  }

  updateCapaian(id: number, capaian: number) {
    return this.targetRepo.update(id, { capaian });
  }
}
