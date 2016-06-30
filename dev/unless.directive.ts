import {Directive} from "@angular/core";
import {TemplateRef} from "@angular/core";
import {ViewContainerRef} from "@angular/core";

@Directive ({
  selector: '[myUnless]',
  inputs: ['myUnless']
})

export class UnlessDirective {
  constructor(private _templateRef: TemplateRef, private _viewContainerRef: ViewContainerRef) {

  }

  set myUnless(condition: boolean) {
    if (!condition) {
      this._viewContainerRef.createEmbeddedView(this._templateRef);
    } else {
      this._viewContainerRef.clear();    }
  }
}
