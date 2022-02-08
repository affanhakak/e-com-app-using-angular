import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: '',
  templateUrl: './welcome-component.html',
  styleUrls: ['./welcome-component.css'],
})
export class WelcomeComponent {
  constructor(private route: ActivatedRoute) {}
}
