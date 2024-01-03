import { TransformedStageDTO } from './stages';

export interface TransformedResponseDTO {
  totalResult: number
  transformedStages: TransformedStageDTO[]
}