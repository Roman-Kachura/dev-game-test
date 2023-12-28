import { FC } from 'react';
import { ProgressItemProps } from '../../types/progress';

export const ProgressLine: FC<ProgressItemProps> = ({ breakpoints, games }) => {

  const getWrapperWidth = (point: number, index: number): number => {
    if (games > point) return 100;
    const prevPoint = breakpoints[index - 1] | 0;
    return (games > prevPoint && games <= point) ? (games - prevPoint) * 100 / (point - prevPoint) : 0;
  }
  return (
    <div className="progress__line" style={{ gridTemplateColumns: `repeat(${breakpoints.length},1fr)` }}>
      {breakpoints.map((p, i) => {
        const wrapperWidth = getWrapperWidth(p, i);
        const className = `progress__line-item ${games >= p && 'progress__line-item_done'}`;

        return (
          <div key={p} className={className}>
            <div className="progress__line-item-wrapper" style={{ width: `${wrapperWidth}%` }}/>
          </div>
        )
      })}
    </div>
  )
}