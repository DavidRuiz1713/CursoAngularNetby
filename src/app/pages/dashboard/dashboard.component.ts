import { CommonModule } from '@angular/common';
import { Component, inject, Signal } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { HeaderDashboardComponent } from '../../shared/header-dashboard/header-dashboard.component';
import { views } from '../../views/views';
import { Router, RouterOutlet } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeaderDashboardComponent,
    RouterOutlet,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export default class DashboardComponent {
  router = inject(Router);
  indexMenuSelected: number = 0;

  irMenu(): void {
    localStorage.setItem('canAccessToMenu', 'true');
    this.router.navigateByUrl('/dashboard/menu');
  }
}
