import { Client } from 'boardgame.io/react';
import { TicTacToe } from './Game';
import { TicTacToeBoard } from "./Board";
import { SocketIO } from 'boardgame.io/multiplayer'

const TicTacToeClient = Client({
  game: TicTacToe,
  board: TicTacToeBoard,
  multiplayer: SocketIO({ server: 'localhost:8000' }),
});

export default TicTacToeClient;
