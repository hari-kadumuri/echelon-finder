export class Matrix {
		rowCount: number;
		colCount: number;
		elements: any[][];

		constructor(rowCount: number, colCount: number) {
				this.rowCount = rowCount;
				this.colCount = colCount;
				this.elements = [];
				for (let rowidx = 0; rowidx < this.rowCount; rowidx++) {
						const row: any[] = [];
						for (let colidx = 0; colidx < this.colCount; colidx++) {
								row.push(' ');
						}
						this.elements.push(row);
				}
		}
}
