import { FC } from 'react';
import { TransformedStageDTO } from '../../../types/stages';

interface ProgressNumbersItemProps {
  totalResult: number
  thresholdPoint: number
  currentIndex: number
  stages: TransformedStageDTO[]
}

export const ProgressNumbersItem: FC<ProgressNumbersItemProps> = (
  { stages, thresholdPoint, totalResult, currentIndex }
) => {
  const prevPoint = stages[currentIndex - 1]?.thresholdPoints | 0;
  const text = (totalResult <= thresholdPoint && totalResult > prevPoint) ? `${totalResult}/${thresholdPoint} ` : thresholdPoint;

  return (
    <li className="progress__numbers-item">
      <span className="progress__numbers-item-text">{text}</span>
    </li>
  )
}