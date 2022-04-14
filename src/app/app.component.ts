import {Component} from '@angular/core';
import ActivateGuard from './activate-guard';

@Component({
  selector: 'my-app',
  template: `
    <nav>
      <a [routerLink]="['component-one']">Component One</a><br\>
      <a [routerLink]="['component-two']">Guarded Component Two</a>
    </nav>
    
    <div style="margin-top: 10px;">
      Can activate:
      <input #canactivate type="checkbox" (change)="checkboxChanged(canactivate.checked)" />
    </div>
    
    <div style="color: green; margin-top: 10px;">Outlet:</div>
    <div style="border: 2px solid green; padding: 10px;">
      <router-outlet></router-outlet>
    </div>
    
    <p>
      Try navigating to component two. It is prevented until checkbox is checked.
    </p>
  `
})
export default class AppComponent {
  constructor(private activateGuard: ActivateGuard) {}

  checkboxChanged(canActivate) {
    // Update guard when checkbox checked.
    this.activateGuard.setCanActivate(canActivate);
  }
}

/*
https://medium.com/@etherealm/named-export-vs-default-export-in-es6-affb483a0910#:~:text=Named%20exports%20are%20useful%20to,an%20object%20or%20anything%20else.
*/