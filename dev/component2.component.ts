import {Component} from '@angular/core';
import {LogginService} from './services/loggin.service';
import {CalculatorService} from './services/calculator.service';

@Component ({
	selector: 'component-2',
	template: `
		<input type="text" #message>
		<button (click)="onLog(message.value)">Send</button>
	`,
	providers: [LogginService, CalculatorService]
})

export class Component2Component {

	constructor(private _logginService: LogginService) {

	}

	onLog(message: string){
		this._logginService.log(message);
	}
}