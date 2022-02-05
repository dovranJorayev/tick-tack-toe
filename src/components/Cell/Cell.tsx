import classes from './Cell.module.css';

interface CellProps {
  x: number;
  y: number;
  value: string|null;
  clickHandler: (row: number, column: number) => void
}

function Cell(props: CellProps): JSX.Element {
  const { x, y, value, clickHandler} = props;

  const onClick = (e: React.MouseEvent): void => {
    clickHandler(x, y);
  }

  return (
    <button 
      onClick={onClick}
      className={classes['cell']}
      disabled={value !== null}
    >
      { value }
    </button>
  );
}

export default Cell;