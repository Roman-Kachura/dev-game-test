import axios, { AxiosResponse } from 'axios';
import { StageDTO } from '../../types/stages';

const $api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

export const api = {
  getStages() {
    return $api.get<AxiosResponse, AxiosResponse<StageDTO[]>>('/stages')
  },
  changeGame(stage: StageDTO) {
    return $api.put<AxiosResponse>(`/stages/${stage.id}`, stage);
  }
}