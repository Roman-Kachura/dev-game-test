import { TransformedStageDTO } from '../types/stages';

export const getStageDonePercent = (currentPoint: number, currentIndex: number, stages: TransformedStageDTO[], totalResult: number): number => {
  if (totalResult > currentPoint) return 100;
  const prevPoint = stages[currentIndex - 1]?.thresholdPoints | 0;
  return (totalResult > prevPoint && totalResult <= currentPoint) ? (totalResult - prevPoint) * 100 / (currentPoint - prevPoint) : 0;
}