import { GameActionType, GameRole, GameStatus } from 'assets/constants';

export type Cell = null | GameRole;
export type Row = Cell[];
export type Table = Row[];

export interface GameState {
  table: Table;
  currentRole: GameRole;
  winner: GameRole | null;
  status: GameStatus;
}

export interface GameContextValue {
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
}

export interface Dimension {
  y: number;
  x: number;
}

export interface GameAction {
  type: GameActionType;
  payload?: Dimension
}