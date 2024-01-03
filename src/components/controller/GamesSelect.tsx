import { ChangeEvent, FC } from 'react';
import { TransformedStageDTO } from '../../types/stages';
import { GameDTO } from '../../types/games';

interface GamesSelectProps {
  gameList:GameDTO[]
  changeGame: (e: ChangeEvent<HTMLSelectElement>) => void
}

export const GamesSelect: FC<GamesSelectProps> = ({ gameList, changeGame }) => {
  return (
    <select name="games" id="games" onChange={changeGame}>
      {gameList.map(g => {
        return (
          <option key={g.name} value={g.name}>{g.name}</option>
        )
      })}
    </select>
)
}