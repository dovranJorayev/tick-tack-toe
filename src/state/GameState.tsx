import React, { Reducer } from 'react';
import { GameActionType } from 'assets/constants';
import { GameAction, GameContextValue, GameState } from 'state/types';
import { updateState } from './utils/updateState';
import { getInitialState } from './utils/getInitialState';


export const gameReducer: Reducer<GameState, GameAction> = (state, action) => {
  switch (action.type) {
    case GameActionType.UPDATE: {
      if(action.payload !== undefined) {
        return { 
          ...updateState(state, action.payload)
        }
      }
      return state;
    }
    case GameActionType.CLEAR: {
      return getInitialState();
    }
    default: throw new Error('Unknown Action');
  }
}

export const GameContext = React.createContext<GameContextValue|null>(null);