import { IsString, IsDateString, IsNumber, IsBoolean } from 'class-validator';

export class CreateTargetDto {
  @IsDateString()
  tenggat: string;

  @IsString()
  jenis: string;

  @IsString()
  sasaranStrategis: string;

  @IsNumber()
  capaian: number;

  @IsString()
  statusAksi: string;

  @IsBoolean()
  isNew: boolean;
}
