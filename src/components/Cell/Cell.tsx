import { GameActionType, GameStatus } from 'assets/constants';
import { useGameDispatcher } from 'hooks/useGameDispatcher';
import { useGameState } from 'hooks/useGameState';
import React from 'react';
import classes from './Cell.module.css';

interface CellProps {
  y: number;
  x: number;
  value: string|null;
}

function Cell(props: CellProps): JSX.Element {
  const { status } = useGameState();
  const { y, x, value } = props;
  const dispatcher = useGameDispatcher();

  const onClick: React.MouseEventHandler = e => {
    dispatcher({
      type: GameActionType.UPDATE,
      payload: { y, x }
    });
  }
  
  const disabled = React.useMemo(() => {
    return value !== null || status === GameStatus.OVER;
  }, [value, status]);

  return (
    <button 
      onClick={onClick}
      className={classes['cell']}
      disabled={disabled}
    >
      { value }
    </button>
  );
}

export default Cell;