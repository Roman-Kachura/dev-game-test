import { FC } from 'react';
import star from '../../assets/star.svg';
import blueStar from '../../assets/blue-star.svg';
import cup from '../../assets/cup.svg';
import { ProgressItemProps } from '../../types/progress';


export const ProgressStars: FC<ProgressItemProps> = ({games,breakpoints}) => {
  if (breakpoints.includes(0)) breakpoints.shift();

  return (
    <div className="progress__stars" style={{gridTemplateColumns:`repeat(${breakpoints.length},1fr)`}}>
      {breakpoints.map((p, i) => {
        const image = (i === breakpoints.length - 1) ? cup : (games >= p) ? blueStar : star;
        return (
          <div className="progress__stars-item">
            <img className="progress__stars-image" src={image} alt=""/>
          </div>
        )
      })}
    </div>
  )
}