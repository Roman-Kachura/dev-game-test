import { FC } from 'react';
import { ProgressLine } from '../components/progress/line/ProgressLine';
import { ProgressNumbers } from '../components/progress/numbers/ProgressNumbers';
import { ProgressStars } from '../components/progress/stars/ProgressStars';
import { TransformedResponseDTO } from '../types/response';

interface ProgressProps extends TransformedResponseDTO{

}

export const Progress: FC<ProgressProps> = ({transformedStages,totalResult}) => {
  return (
    <div className="progress">
      <ProgressStars transformedStages={transformedStages} totalResult={totalResult}/>
      <ProgressLine transformedStages={transformedStages} totalResult={totalResult}/>
      <ProgressNumbers transformedStages={transformedStages} totalResult={totalResult}/>
    </div>
  )
}