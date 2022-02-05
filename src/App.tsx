import Table from 'components/Table/Table';
import { GameContextProvider } from 'contexts/GameContext';

function App(): JSX.Element {
  return (
    <GameContextProvider>
      <Table/>
    </GameContextProvider>
  );
}

export default App;
