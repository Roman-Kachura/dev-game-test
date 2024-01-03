import { StageDTO, TransformedStageDTO } from '../../types/stages';
import { RootState } from '../../types/store';

export const getTransformedStages = (state:RootState): TransformedStageDTO[] => state.stagesReducer.transformedStages;

export const getTotalResult = (state:RootState):number => state.stagesReducer.totalResult;
