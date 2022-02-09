import React from 'react';
import { GameContext, gameReducer } from 'state/GameState';
import { GameState } from 'state/types';
import { getInitialState } from 'state/utils/getInitialState';

const initialGameState: GameState = getInitialState();

export function GameStateContextProvider(props: React.PropsWithChildren<{}>): JSX.Element {
    const [state, dispatch] = React.useReducer(gameReducer, initialGameState);
  
    const value = {
      state,
      dispatch
    };
  
    return (
      <GameContext.Provider value={value}>
        { props.children }
      </GameContext.Provider>
    );
  }