import { GameRole, GameStatus } from 'assets/constants';
import { GameState, Table } from 'state/types';
import { GAME_BOARD_SIZE as SIZE } from 'assets/constants';

export const getInitialState = (): GameState => {
	return {
	  table: getInitialTable(SIZE),
	  currentRole: GameRole.X,
	  winner: null,
	  status: GameStatus.PROCESSING
	};
  }

const getInitialTable = (size: number): Table => {
	return new Array(size)
	.fill(null)
	.map(
		row => new Array(size).fill(null)
	);
};