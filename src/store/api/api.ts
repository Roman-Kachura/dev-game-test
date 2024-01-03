import axios, { AxiosResponse } from 'axios';
import { StageDTO } from '../../types/stages';
import env from "react-dotenv";

const $api = axios.create({
  baseURL: env.API_URL
});

export const api = {
  getStages() {
    return $api.get<AxiosResponse, AxiosResponse<StageDTO[]>>('/stages')
  },
  changeGame(stage: StageDTO) {
    return $api.put<AxiosResponse>(`/stages/${stage.id}`, stage);
  }
}