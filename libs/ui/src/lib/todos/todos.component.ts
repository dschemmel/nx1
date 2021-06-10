import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '@lionsoft/data';

@Component({
	selector: 'lionsoft-todos',
	templateUrl: './todos.component.html',
	styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
	@Input() todos: Todo[] = [];

	// eslint-disable-next-line @typescript-eslint/no-empty-function
	constructor() {}

	// eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method,@typescript-eslint/no-empty-function
	ngOnInit() {}
}
