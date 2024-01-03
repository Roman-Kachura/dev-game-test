import { FC } from 'react';
import { TransformedResponseDTO } from '../../../types/response';
import { ProgressLineItem } from './ProgressLineItem';

interface ProgressLineProps extends TransformedResponseDTO {}

export const ProgressLine: FC<ProgressLineProps> = ({ transformedStages, totalResult }) => {
  return (
    <div className="progress__line">
      {transformedStages.map((s, i) => (
        <ProgressLineItem
          key={s.id}
          thresholdPoints={s.thresholdPoints}
          currentIndex={i}
          totalResult={totalResult}
          transformedStages={transformedStages}
        />
      ))}
    </div>
  )
}