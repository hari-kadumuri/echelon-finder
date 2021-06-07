import { Component, OnInit } from '@angular/core';
import { Matrix } from '../models/Matrix.model';
import { Operation } from '../models/Operation.model';

@Component({
	selector: 'app-echelon-finder',
	templateUrl: './echelon-finder.component.html',
	styleUrls: ['./echelon-finder.component.css']
})
export class EchelonFinderComponent implements OnInit {

	constructor() { }

	matrix: Matrix;
	showOutputDiv: boolean = false;
	outputMatrices: Matrix[];
	operations: Operation[] = [];

	ngOnInit(): void {
		this.matrix = new Matrix(3, 2);
		this.matrix.elements = [[6, 5], [4, 3], [2, 1]]
	}

	onMatrixSizeChange() {
		this.matrix.elements = [];
		for (let index = 0; index < this.matrix.rowCount; index++) {
			const row: any[] = [];
			for (let colidx = 0; colidx < this.matrix.colCount; colidx++) {
				row.push(' ');
			}
			this.matrix.elements.push(row);
		}
	}

	float2int(value: number) {
		return value | 0;
	}

	computeEchelon() {
		// computing echelon form is left

		// rearrange rows

		// convert into echelon form
		this.outputMatrices = [];
		let initialOutput = JSON.parse(JSON.stringify(this.matrix));
		this.outputMatrices.push(initialOutput);
		
		for (let colidx = 0; colidx < this.matrix.colCount && colidx < this.matrix.rowCount; colidx++) {
			var currMatrix = JSON.parse(JSON.stringify(this.outputMatrices[this.outputMatrices.length-1]));
			var operation = new Operation();
			operation.pivot = colidx;
			for (let rowidx = colidx+1; rowidx < this.matrix.rowCount; rowidx++) {
				var factor = currMatrix.elements[rowidx][colidx]/currMatrix.elements[colidx][colidx];
				for (let subcolidx = 0; subcolidx < this.matrix.colCount; subcolidx++) {
					currMatrix.elements[rowidx][subcolidx] = currMatrix.elements[rowidx][subcolidx] - factor * currMatrix.elements[colidx][subcolidx];
				}
				operation.factors.push(factor);
				this.operations.push(operation);
			}
			this.outputMatrices.push(currMatrix);
		}

		// show output
		this.showOutputDiv = true;
	}
	
}