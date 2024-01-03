import { FC } from 'react';
import { TransformedResponseDTO } from '../../../types/response';
import { ProgressNumbersItem } from './ProgressNumbersItem';

interface ProgressNumbersProps extends TransformedResponseDTO {}

export const ProgressNumbers: FC<ProgressNumbersProps> = ({ transformedStages, totalResult }) => {
  return (
    <ul className="progress__numbers">
      <li className="progress__numbers-item">
        <span className="progress__numbers-item-text">0</span>
      </li>

      {transformedStages.map((s, i) => (
        <ProgressNumbersItem
          key={s.id}
          totalResult={totalResult}
          thresholdPoint={s.thresholdPoints}
          currentIndex={i}
          stages={transformedStages}
        />
      ))}

    </ul>
  )
}