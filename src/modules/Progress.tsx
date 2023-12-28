import { FC } from 'react';
import { ProgressLine } from '../components/progress/ProgressLine';
import { ProgressNumbers } from '../components/progress/ProgressNumbers';
import { ProgressStars } from '../components/progress/ProgressStars';

export const Progress: FC = () => {
  const games = 350;
  const breakpoints = [0, 25, 50, 100, 200, 500, 1000, 4000];

  return (
    <div className="progress">
      <ProgressStars games={games} breakpoints={breakpoints}/>
      <ProgressLine games={games} breakpoints={breakpoints}/>
      <ProgressNumbers games={games} breakpoints={breakpoints}/>
    </div>
  )
}