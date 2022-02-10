import { Component } from '@angular/core';

@Component({
  templateUrl: './forms.component.html',
})
export class AppComponent {
  title = 'sign-up';

  submitted = false;

  constructor() {}

  onSubmit() {
    this.submitted = true;
  }
}
