import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'echelon-finder';
	showEchelonFinder = true;

	showEchelonFinderComp() {
		this.showEchelonFinder = !this.showEchelonFinder;
	}
}
