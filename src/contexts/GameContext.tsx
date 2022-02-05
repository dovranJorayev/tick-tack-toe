import React from 'react';

type Table = Array<Array<(null|string)>>; 

interface GameContextValue {
  table: Table;
  isX: boolean;
}

const SIZE = 3;
const getInitialTable = (size: number): Table => {
  const table: Table = [];

  for (let x = 0; x < size; x++) {
    const row: Array<string|null> = [];
    for (let y = 0; y < size; y++) {
      row.push(null);
    }
    table.push(row);
  }

  return table;
}

const GameContext = React.createContext<GameContextValue>(null);

export function GameContextProvider(props: React.PropsWithChildren<{}>): JSX.Element {
  const [table, setTable] = React.useState<Table>(getInitialTable(SIZE));
  const [isX, setIsX] = React.useState(true);

  const value = {
    table,
    isX
  };

  return (
    <GameContext.Provider value={value}>
      { props.children }
    </GameContext.Provider>
  )
}

export const useGameContext = (): GameContextValue => {
  const value = React.useContext(GameContext);

  if(value === null) {
    throw new Error('Context could not be null after initialization');
  }

  return value;
}