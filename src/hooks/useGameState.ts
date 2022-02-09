import React from 'react';
import { GameContext } from 'state/GameState';
import { GameState } from 'state/types';

export const useGameState = (): GameState => {
  const value = React.useContext(GameContext);

  if(value === null) {
    throw new Error('Context could not be null after initialization');
  }

  return value.state;
}
