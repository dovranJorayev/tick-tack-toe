import Table from 'components/Table/Table';
import { GameStateContextProvider } from 'providers/GameContextProvider';

function App(): JSX.Element {
  return (
    <GameStateContextProvider>
      <Table/>
    </GameStateContextProvider>
  );
}

export default App;
