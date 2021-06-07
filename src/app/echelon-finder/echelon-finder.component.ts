import { Component, OnInit } from '@angular/core';
import { Matrix } from '../models/Matrix.model';

@Component({
	selector: 'app-echelon-finder',
	templateUrl: './echelon-finder.component.html',
	styleUrls: ['./echelon-finder.component.css']
})
export class EchelonFinderComponent implements OnInit {

	constructor() { }

	matrix: Matrix;

	ngOnInit(): void {
		this.matrix = new Matrix(3, 2);
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

	computeEchelon() {
		// computing echelon form is left
	}
	
}