import { getStageDonePercent } from '../../../helpers/getStageDonePercent';
import { TransformedResponseDTO } from '../../../types/response';
import { FC, useEffect, useState } from 'react';

interface ProgressLineItemProps extends TransformedResponseDTO {
  thresholdPoints: number
  currentIndex: number
}

export const ProgressLineItem: FC<ProgressLineItemProps> = (
  { transformedStages, totalResult, thresholdPoints, currentIndex }
) => {
  const [wrapperStyle, setWrapperStyle] = useState({});

  useEffect(() => {
    const stageDonePercent = getStageDonePercent(thresholdPoints, currentIndex, transformedStages, totalResult);
    if (window.innerWidth < 569) {
      setWrapperStyle({ height: `${stageDonePercent}%`});
    } else {
      setWrapperStyle({ width: `${stageDonePercent}%`});
    }
  }, [window.innerWidth, transformedStages, totalResult, thresholdPoints, currentIndex])

  const className = `progress__line-item ${totalResult >= thresholdPoints && 'progress__line-item_done'}`;

  return (
    <div className={className}>
      <div className="progress__line-item-wrapper" style={wrapperStyle}/>
    </div>
  )
}