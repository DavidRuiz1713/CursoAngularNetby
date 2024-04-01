// cSpell:disable
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { DashboardComponent } from '@pages/dashboard/dashboard.component';
// import { TempComponent } from './temp.component';
// import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'root',
  imports: [RouterOutlet],
  // templateUrl: './root.component.html',
  template: `<router-outlet></router-outlet>`,
})
export class RootComponent {
  hideComponent: boolean = false;
  messageParent: number = 0;
}
//git push -u origin main
