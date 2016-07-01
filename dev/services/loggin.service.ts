import {Injectable} from '@angular/core';

@Injectable()
export class LogginService {
	private _lastMessage = '';

	log(message: string){
		console.log('Current Message: ' + message + ', Last Message: ' + this._lastMessage);
		this._lastMessage = message;
	}
}