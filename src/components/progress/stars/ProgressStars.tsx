import { FC } from 'react';
import { TransformedResponseDTO } from '../../../types/response';
import { ProgressStarsItem } from './ProgressStarsItem';

interface ProgressStarsProps extends TransformedResponseDTO {

}


export const ProgressStars: FC<ProgressStarsProps> = ({ totalResult, transformedStages }) => {
  return (
    <div className="progress__stars">

      {transformedStages.map((s, i) => (
        <ProgressStarsItem
          key={s.id}
          isLastItem={i === transformedStages.length - 1}
          totalResult={totalResult}
          thresholdPoints={s.thresholdPoints}
          isPlayed={s.isPlayedStage}
        />
      ))}

    </div>
  )
}