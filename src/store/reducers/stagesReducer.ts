import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StageDTO, TransformedStageDTO } from '../../types/stages';
import { api } from '../api/api';
import { getTransformedResponseData } from '../../helpers/getTransformedResponseData';
import { TransformedResponseDTO } from '../../types/response';
import { GameDTO } from '../../types/games';
import { RootState } from '../../types/store';

interface StagesState {
  totalResult: number
  transformedStages: TransformedStageDTO[]
  stages: StageDTO[]
}

const initialState: StagesState = {
  totalResult: 0,
  transformedStages: [],
  stages: []
}

export const getStagesThunk = createAsyncThunk('get-stage', async (arg, thunkAPI) => {
  const res = await api.getStages();
  const transformedResponseData = getTransformedResponseData(res.data);
  thunkAPI.dispatch(setStages({ ...transformedResponseData, stages: res.data }));
})

export const changeGameData = createAsyncThunk('change-game-data', async (arg: { stageId: number, game: GameDTO }, thunkAPI) => {
  const state = thunkAPI.getState() as RootState;
  const stage = state.stagesReducer.stages.find(s => s.id === arg.stageId);

  if (stage) {
    const games = stage.games.map(g => g.name !== arg.game.name ? g : arg.game);
    const newStage = { ...stage, games };
    const newStages = state.stagesReducer.stages.map(s => s.id !== arg.stageId ? s : newStage);

    try {
      await api.changeGame(newStage);
      const transformedResponseData = getTransformedResponseData(newStages);
      thunkAPI.dispatch(setStages({ ...transformedResponseData, stages: newStages }));
    } catch (e) {
    }
  }
})


const stagesSlice = createSlice({
  initialState,
  name: 'stages',
  reducers: {
    setStages: (state: StagesState, action: PayloadAction<SetStagesPayloadAction>) => {
      state.totalResult = action.payload.totalResult;
      state.transformedStages = action.payload.transformedStages;
      state.stages = action.payload.stages;
    },
  }
});

interface SetStagesPayloadAction extends TransformedResponseDTO {
  stages: StageDTO[]
}

export const { setStages } = stagesSlice.actions;

export default stagesSlice.reducer;