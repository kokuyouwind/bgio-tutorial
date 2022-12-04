import { Lobby } from 'boardgame.io/react';
import { TicTacToe } from './Game';
import { TicTacToeBoard } from "./Board";

const App = () => (
  <Lobby
    gameServer={`http://${window.location.hostname}:8000`}
    lobbyServer={`http://${window.location.hostname}:8000`}
    gameComponents={[
      { game: TicTacToe, board: TicTacToeBoard }
    ]}
  />
)

export default App
