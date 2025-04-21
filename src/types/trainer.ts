import { ELocale } from '@/constants/enum';

export interface ITrainer {
  name: string;
  role: string;
  description: Record<ELocale, string>;
  imageUrl: string;
}
