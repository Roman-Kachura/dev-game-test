import { ChangeEvent, FC, useEffect, useState } from 'react';
import { TransformedStageDTO } from '../types/stages';
import { GameDTO } from '../types/games';
import { useAppDispatch } from '../helpers/hooks/storeHooks';
import { changeGameData } from '../store/reducers/stagesReducer';
import { StagesSelect } from '../components/controller/StagesSelect';
import { GamesSelect } from '../components/controller/GamesSelect';

interface ControllerProps {
  stages: TransformedStageDTO[]
  totalResult: number
}

export const Controller: FC<ControllerProps> = ({ stages, totalResult }) => {
  const dispatch = useAppDispatch();
  const [stage, setStage] = useState<TransformedStageDTO>();
  const [gameList, setGameList] = useState<GameDTO[]>([]);
  const [game, setGame] = useState<GameDTO>();
  const [result, setResult] = useState(0);
  const [status, setStatus] = useState(false);

  const changeStage = (e: ChangeEvent<HTMLSelectElement>) => {
    const stage = stages.find(s => s.id === +e.currentTarget.value);
    setStage(stage)
  }

  const changeGame = (e: ChangeEvent<HTMLSelectElement>) => {
    const game = gameList.find(g => g.name === e.currentTarget.value);
    setGame(game);
  }

  const changeResult = (e: ChangeEvent<HTMLInputElement>) => {
    setResult(+e.currentTarget.value)
  }

  const changeStatus = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.checked)
  }

  const checkValidResultValue = () => {
    if (stage) {
      const amountGames = stage.games.length;
      const prevIndex = stages.indexOf(stage) - 1;
      const prevStagePoint = stages[prevIndex]?.thresholdPoints | 0;
      let maxValue = stage.thresholdPoints - prevStagePoint;
      if (amountGames > 1) {
        const results = stage.games.reduce((p, c) => p += c.bestResult, 0);
        maxValue = stage.thresholdPoints - prevStagePoint - results;
      }

      return maxValue;
    }
    return 0;
  }

  const saveChangedResult = () => {
    if (checkValidResultValue() && game && stage) {
      const newGame = { ...game, bestResult: result, isPlayed: status };
      dispatch(changeGameData({ stageId: stage.id, game: newGame }));
    }
  }

  useEffect(() => {
    setStage(stages[0])
  }, [stages]);

  useEffect(() => {
    if (stage) {
      setGameList(stage.games);
      setGame(stage.games[0]);
    }
  }, [stage]);

  useEffect(() => {
    if (game) {
      setResult(game.bestResult);
      setStatus(game.isPlayed);
    }
  }, [game])

  return (
    <div className="controller">
      <h3 className='controller__title'>Состояние игр:</h3>
      {stage && stages && <StagesSelect stages={stages} changeStage={changeStage} currentStage={stage}/>}
      {gameList && <GamesSelect gameList={gameList} changeGame={changeGame}/>}


      {game && <div className="controller__information controller__information_game">Результат игры: {game.bestResult}</div>}
      {stage && <div className="controller__information controller__information_stage">Результат этапа: {stage.resultStage}</div>}
      <div className="controller__information controller__information_all">Общий результат: {totalResult}</div>
      <div className='controller__information'>Состояние игры: {game?.isPlayed ? 'Игра состоялась' : 'Игра не состоялась'}</div>

      <div className="controller__result">
        <label htmlFor="result">Изменить результат игры: </label>
        <input
          className={result > checkValidResultValue() ? 'controller__result-input_error' : ''}
          id="result"
          type="number"
          value={result}
          onChange={changeResult}
        />
      </div>

      <div className="controller__status">
        <label htmlFor="status">Изменить состояние игры: </label>
        <input id="status" type="checkbox" checked={status} onChange={changeStatus}/>
      </div>

      <button
        onClick={saveChangedResult}
        disabled={result > checkValidResultValue()}
        className="controller__btn">
        сохранить
      </button>
    </div>
  )
}