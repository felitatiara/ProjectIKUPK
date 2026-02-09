import { Target } from '../entities/target.entity';

export class DashboardResponseDto {
  id: number
  tenggat: string
  target: string
  sasaranStrategis: string
  capaian: number
  jenis: string
  status: 'INPUT' | 'PROSES' | 'SELESAI'

  static fromEntity(entity: TargetEntity): DashboardResponseDto {
    return {
      id: entity.id,
      tenggat: entity.tenggat.toISOString().split('T')[0],
      target: entity.namaTarget,
      sasaranStrategis: entity.sasaranStrategis,
      capaian: entity.capaian,
      jenis: entity.jenis,
      status:
        entity.capaian === 100
          ? 'SELESAI'
          : entity.capaian > 0
          ? 'PROSES'
          : 'INPUT',
    }
  }
}
