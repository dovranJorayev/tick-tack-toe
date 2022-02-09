import Cell from 'components/Cell';
import classes from './Table.module.css';
import React from 'react';
import { GameActionType, GameStatus } from 'assets/constants';
import { useGameState } from 'hooks/useGameState';
import { useGameDispatcher } from 'hooks/useGameDispatcher';

function Table(): JSX.Element {
  const { currentRole, table, winner, status } = useGameState();
  const dispatcher = useGameDispatcher();

  const clearTable = React.useCallback(() => {
    dispatcher({
      type: GameActionType.CLEAR
    });
  }, [dispatcher]);

  const HAS_WINNER = React.useMemo(() => {
    return winner !== null;
  }, [winner]);

  const NO_WINNER = React.useMemo(() => {
    return winner === null && status === GameStatus.OVER;
  }, [winner, status]);

  React.useEffect(() => {
    if(HAS_WINNER) {
      alert(`Winner is: ${winner}`);
    }
  }, [HAS_WINNER, winner]);

  React.useEffect(() => {
    if(NO_WINNER) {
      alert('UPS no winner. You could start again');
    }
  }, [NO_WINNER]);

  return (
    <div className={classes['screen']}>
      <div className={classes['header']}>
        {status === GameStatus.PROCESSING && `Current role: ${currentRole}`}
        {status === GameStatus.OVER && 'Game Over'}
      </div>

      <button 
        className={classes['clear-btn']}
        onClick={clearTable}
      >
        Clear
      </button>

      <div className={classes['table']}>
        {
          table.map((row, x) => (
            <div 
              key={x} 
              className={classes['row']}
            >
              {
                row.map( (column, y) => (
                  <Cell 
                    key={y}
                    x={x}
                    y={y}
                    value={column}
                  />
                ))
              }
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Table;
