import { GameDTO } from './games';

export interface StageDTO {
  name: string
  id: number
  thresholdPoints: number
  games: GameDTO[]
}

export interface TransformedStageDTO extends StageDTO{
  isPlayedStage: boolean
  resultStage:number
}