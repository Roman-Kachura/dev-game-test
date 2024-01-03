import { FC } from 'react';
import cup from '../../../assets/cup.svg';
import blueStar from '../../../assets/blue-star.svg';
import star from '../../../assets/star.svg';

interface ProgressStarsItemProps {
  isLastItem: boolean
  isPlayed: boolean
  totalResult: number
  thresholdPoints: number
}

export const ProgressStarsItem: FC<ProgressStarsItemProps> = (
  {
    thresholdPoints,
    isPlayed,
    totalResult,
    isLastItem
  }
) => {
  const image = isLastItem ? cup : (totalResult >= thresholdPoints && isPlayed) ? blueStar : star;

  return (
    <div className="progress__stars-item">
      <img className="progress__stars-image" src={image} alt=""/>
    </div>
  )
}