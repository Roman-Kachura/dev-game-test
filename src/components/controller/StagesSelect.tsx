import { ChangeEvent, FC } from 'react';
import { TransformedStageDTO } from '../../types/stages';

interface StagesSelectProps {
  stages: TransformedStageDTO[]
  currentStage: TransformedStageDTO
  changeStage: (e: ChangeEvent<HTMLSelectElement>) => void
}

export const StagesSelect: FC<StagesSelectProps> = ({ stages, currentStage, changeStage }) => {
  return (
    <select name="stages" id="stages" value={currentStage.id} onChange={changeStage}>
      {stages.map(s => {
        return (
          <option key={s.id} value={s.id}>{s.name}</option>
        )
      })}
    </select>
  )
}