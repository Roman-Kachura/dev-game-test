import React, { useEffect } from 'react';
import { Progress } from './modules/Progress';
import { getStagesThunk } from './store/reducers/stagesReducer';
import { useAppDispatch, useAppSelector } from './helpers/hooks/storeHooks';
import { getTransformedStages, getTotalResult } from './store/selectors/stageSelectors';
import { Controller } from './modules/Controller';

function App() {
  const dispatch = useAppDispatch();
  const stages = useAppSelector(getTransformedStages);
  const totalResult = useAppSelector(getTotalResult);

  useEffect(() => {
    dispatch(getStagesThunk());
  }, [])

  return (
    <div className="app">
      <Progress transformedStages={stages} totalResult={totalResult}/>
      {stages.length > 0 && <Controller stages={stages} totalResult={totalResult}/>}
    </div>
  );
}

export default App;
