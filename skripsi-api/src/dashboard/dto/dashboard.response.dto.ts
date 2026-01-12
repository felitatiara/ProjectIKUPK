export class DashboardResponseDto {
  banner: {
    title: string;
    description: string;
    buttonText: string;
    redirectTo: string;
  };

  targets: {
    id: number;
    deadline: string;
    targetType: string;
    sasaran: string;
    capaian: number;
    action: string;
  }[];
}
