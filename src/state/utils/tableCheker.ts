import { Row, Table } from 'state/types';

interface WinnerChecher {
	(table: Table, value: string, dimension: {y: number, x: number}): boolean
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
  
const rowChecker: WinnerChecher = (table, value, {y, x}) => {
	const row = table[y];
	return row.every(cell => cell === value);
};

const columnChecker: WinnerChecher = (table, value, {y, x}) => {
	const column = table.map( row => row[x]);
	return column.every(cell => cell === value);
}
  
const leftDioganalChecker: WinnerChecher = (table, value, {y, x}) => {
	/** Only if row and column index equal it is on left dioganal */
	if(y === x) { 
		const leftDioganal: Array<string|null> = [];
		for (let i = 0; i < table.length; i++) {
			leftDioganal.push(table[i][i]);
		}

		return leftDioganal.every(cell => cell === value);
	}
	
	return false;
}
  
const rightDioganalChecker: WinnerChecher = (table, value, {y, x}) => {
	/** Right dioganal's line on static 'n' value (table.length) in our case 
	 * has expression like f(y) = x = (n - 1) - y 
		*/
	if(y + x === table.length - 1) {
		const rightDioganal: Row = [];
		for (let i = 0; i < table.length; i++) {
			const y = i;
			const x = table.length - 1 - i;
			rightDioganal.push(table[y][x]);
		}

		return rightDioganal.every(cell => cell === value);
	}

	return false;
}