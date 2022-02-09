import { Row, Table } from 'state/types';

interface WinnerChecher {
	(table: Table, value: string, dimension: {x: number, y: number}): boolean
}

export const tableChecker: WinnerChecher = (table, value, dimension) => {
  const args: Parameters<WinnerChecher> = [table, value, dimension];
    
	return [
		rowChecker(...args), 
		columnChecker(...args), 
		leftDioganalChecker(...args), 
		rightDioganalChecker(...args),
	].some(item => item === true);
};
  
const rowChecker: WinnerChecher = (table, value, {x, y}) => {
	const row = table[x];
	return row.every(cell => cell === value);
};

const columnChecker: WinnerChecher = (table, value, {x, y}) => {
	const column = table.map( row => row[y]);
	return column.every(cell => cell === value);
}
  
const leftDioganalChecker: WinnerChecher = (table, value, {x, y}) => {
	/** Only if row and column index equal it is on left dioganal */
	if(x === y) { 
		const leftDioganal: Array<string|null> = [];
		for (let i = 0; i < table.length; i++) {
			leftDioganal.push(table[i][i]);
		}

		return leftDioganal.every(cell => cell === value);
	}
	
	return false;
}
  
const rightDioganalChecker: WinnerChecher = (table, value, {x, y}) => {
	/** Right dioganal's line on static 'n' value (table.length) in our case 
	 * has expression like f(x) = y = (n - 1) - x 
		*/
	if(x + y === table.length - 1) {
		const rightDioganal: Row = [];
		for (let i = 0; i < table.length; i++) {
			const x = i;
			const y = table.length - 1 - i;
			rightDioganal.push(table[x][y]);
		}

		return rightDioganal.every(cell => cell === value);
	}

	return false;
}