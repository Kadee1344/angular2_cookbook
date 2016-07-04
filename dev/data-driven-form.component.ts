import {Component} from '@angular/core';
import {FormBuilder} from '@angular/common';
import {OnInit} from '@angular/core';

@Component ({
	selector: 'my-data-driven',
	template: `
		<h2>Sign-up form</h2>
		<form [ngFormModel]="myForm" (ngSubmit)="onSubmit()">
			<div>
				<label for="mail">Mail</label>
				<input [ngFormControll]="myForm.controls['email']" type="text" id="mail" >
				<span class="validation-error">Not valid</span>
			</div>
			<div>
				<label for="password">Password</label>
				<input [ngFormControll]="myForm.controls['password']" type="text" id="password" >
				<span class="validation-error">Not valid</span>
			</div>
			<div>
				<label for="confirm-password">Confirm password</label>
				<input [ngFormControll]="myForm.controls['confirmPassword']" type="text" id="confirm-password" >
				<span class="validation-error">Not valid</span>
			</div>
			<button type="submit">Submit</button>
		</form>
		<h2>You submitted</h2>
		<div>Mail: </div>
		<div>Password: </div>
	`
})
export class DataDrivenFormComponent implements OnInit{
	myForm: ControlGroup;
	user = {mail: '', password: ''};

	constructor(private _formBuilder: FormBuilder) {}

	onSubmit(form){
		console.log(this.myForm);
	}

	ngOnInit():any {
		this.myForm = this._formBuilder.group({
			'email': ['', Validators.required],
			'password': ['', Validators.required],
			'confirmPassword': ['', Validators.required]
		});
	}
}