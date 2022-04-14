import {Component} from '@angular/core';
import DeactivateGuard from './deactivate-guard'

@Component({
  selector: 'component-two',
  template: `
    <h4>Guarded Component Two</h4>
    <p>Try navigating away (back to component one). It will be blocked unless "Can deactivate" checkbox is checked.</p>
    <div>
      Can deactivate:
      <input #candeactivate type="checkbox" (change)="checkboxChanged(candeactivate.checked)" />
    </div>
    `
})
export default class ComponentTwo {
  private checked:boolean;
  constructor(private canDeac:DeactivateGuard) {}

  canDeactivate():boolean {
    return this.checked;
  }

  checkboxChanged(checked:boolean) :void{
    this.checked = checked;
    this.canDeac.setCanDeactivate(this.checked);
  }
}