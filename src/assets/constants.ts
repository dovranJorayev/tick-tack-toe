export const GAME_BOARD_SIZE = 3;
export enum GameRole {
  X = 'X',
  O = 'O'
}
export enum GameStatus {
  PROCESSING = 'processing',
  OVER = 'over'
}
export enum GameActionType {
  UPDATE = '$check_update',
  CLEAR = '$clear_action'
}