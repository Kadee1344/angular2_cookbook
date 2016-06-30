import {Component} from '@angular/core'
import {HighlightDirective} from './highlight.directive';

@Component({
  selector: 'my-attribute-directives',
  template: `
    <div [myHighlight]="'red'">
      Higlight me
    </div>
    <div [myHighlight]="'yellow'">
      Higlight me 2
    </div>
  `,
  directives: [HighlightDirective]
})

export class AttributeDirectives {

}
