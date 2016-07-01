import {Component} from '@angular/core';
import {LogginService} from './services/loggin.service';
import {CalculatorService} from './services/calculator.service'

@Component({
	selector: 'component-1',
	template: `
		<div>
			<h1>Loggin service</h1>
				<input type="text" #message>
				<button (click)="onLog(message.value)">Send</button>
		</div>
		<div>
			<h1>Calculator</h1>
			<p>Add or multiply these two number</p>
			<input type="text" #num1>
			<input type="text" #num2>
			<button (click)="onMultiply(num1.value, num2.value)">Multiply</button>
			<button (click)="onAdd(num1.value, num2.value)">Add</button>
			<p>Result: {{result}}</p>
		</div>
	`,
	providers: [LogginService, CalculatorService]
})

export class Component1Component {
	result: string;

	constructor(private _logginService: LogginService, private _calculatorService: CalculatorService) {

	}

	onLog(message: string){
		this._logginService.log(message);
	}

	onMultiply(num1: number, num2: number){
		this.result = '' + this._calculatorService.multiply(+num1, +num2);
	}

	onAdd(num1: number, num2: number){
		this.result = '' + this._calculatorService.add(+num1, +num2);
	}
}