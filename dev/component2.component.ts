import {Component} from '@angular/core';
import {LogginService} from './services/loggin.service';

@Component ({
	selector: 'component-2',
	template: `
		<input type="text" #message>
		<button (click)="onLog(message.value)">Send</button>
	`
})

export class Component2Component {

	constructor(private _logginService: LogginService) {

	}

	onLog(message: string){
		this._logginService.log(message);
	}
}