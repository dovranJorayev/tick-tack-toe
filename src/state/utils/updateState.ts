import { GameRole, GameStatus } from 'assets/constants';
import { Dimension, GameState, Table } from 'state/types';
import { tableChecker } from './tableCheker';

export const updateState = (state: GameState, payload: Dimension): GameState => {
    return { 
      table: updateTable(state.table, state.currentRole, payload),
      currentRole: updateRole(state.currentRole),
      ...updateWinnerAndStatus(state.table, state.currentRole, payload),
    }
  }
  
  export const updateTable = (table: Table, value: GameRole, dimension: Dimension): Table => {
    const { x, y } = dimension;
    const row = table[x];
  
    row.splice(y, 1, value);
    table.splice(x, 1, [...row]);
  
    return [
      ...table
    ];
  };
  
  export const updateRole = (currentRole: GameRole): GameRole => {
    return currentRole === GameRole.X ? GameRole.O : GameRole.X;
  }
  
  export const updateStatus = (table: Table, winner: GameRole|null): GameStatus => {
    const NO_POSITIONS = !table.flat().some( cell => cell === null);
    const HAS_WINNER = winner !== null;
  
    if(HAS_WINNER || NO_POSITIONS) return GameStatus.OVER;
    
    return GameStatus.PROCESSING;
  }
  
  export const updateWinnerAndStatus = (table: Table, value: GameRole, dimension: Dimension): {winner: GameRole|null, status: GameStatus} => {
    const HAS_WINNER = tableChecker(table, value, dimension) 
    const NO_POSITIONS = !table.flat().some( cell => cell === null);
  
    if(NO_POSITIONS) {
      if(HAS_WINNER) {
        return {
          winner: value,
          status: GameStatus.OVER
        }
      }
  
      return {
        winner: null,
        status: GameStatus.OVER
      }
    }
  
    if(HAS_WINNER) {
      return {
        winner: value,
        status: GameStatus.OVER
      }
    }
  
    return {
      winner: null,
      status: GameStatus.PROCESSING
    }
  }