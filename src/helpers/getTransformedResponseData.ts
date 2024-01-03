import { StageDTO, TransformedStageDTO } from '../types/stages';
import { TransformedResponseDTO } from '../types/response';


export const getTransformedResponseData = (stages: StageDTO[]): TransformedResponseDTO => {
  let totalResult = 0;
  const transformedStages: TransformedStageDTO[] = [];

  stages.forEach(s => {
    const resultStage = s.games.reduce((prev, current) => prev += current.bestResult, 0);
    totalResult += resultStage;

    const stage: TransformedStageDTO = {
      ...s,
      resultStage,
      isPlayedStage: s.games.some(g => g.isPlayed),
    }

    transformedStages.push(stage)
  });

  return {
    totalResult,
    transformedStages
  }
}