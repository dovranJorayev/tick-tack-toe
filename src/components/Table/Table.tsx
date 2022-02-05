import { useGameContext } from 'contexts/GameContext';
import Cell from 'components/Cell';
import classes from './Table.module.css';

function Table(): JSX.Element {
  const { table } = useGameContext();

  const clickHandler = (x: number, y: number): void => {

  }

  return(
    <div className={classes['table']}>
      {
        table.map((row, x) => (
          <div className={classes['row']}>
            {
              row.map( (column, y) => (
                <Cell 
                  x={x}
                  y={y}
                  value={column}
                  clickHandler={clickHandler}
                />
              ))
            }
          </div>
        ))
      }
    </div>
  );
}

export default Table;
