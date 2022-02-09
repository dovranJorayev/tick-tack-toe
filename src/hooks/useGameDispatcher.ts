import React from 'react';
import { GameContext } from 'state/GameState';
import { GameAction } from 'state/types';

export const useGameDispatcher = (): React.Dispatch<GameAction> => {
	const value = React.useContext(GameContext);

  if(value === null) {
    throw new Error('Context could not be null after initialization');
  }

  return value.dispatch;
}