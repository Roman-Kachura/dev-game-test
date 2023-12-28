import { FC } from 'react';
import { ProgressItemProps } from '../../types/progress';

export const ProgressNumbers: FC<ProgressItemProps> = ({breakpoints,games}) => {
  if (!breakpoints.includes(0)) breakpoints.unshift(0);

  return (
    <ul className="progress__numbers" style={{gridTemplateColumns:`repeat(${breakpoints.length - 1},1fr)`}}>
      {breakpoints.map((p, i) => {
        const prevPoint = breakpoints[i - 1] | 0;
        const text = (games <= p && games > prevPoint) ? `${games}/${p} ` : p;

        return (
          <li key={p} className="progress__numbers-item">
            <span className='progress__numbers-item-text'>{text}</span>
          </li>
        )
      })}
    </ul>
  )
}