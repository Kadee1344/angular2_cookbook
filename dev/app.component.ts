import {Component} from '@angular/core';
import {DataDrivenFormComponent} from './data-driven-form.component';


@Component({
    selector: 'my-app',
    template: ` 
      <my-data-driven>
    `,
    directives: [DataDrivenFormComponent]
})

export class AppComponent {
 
}
