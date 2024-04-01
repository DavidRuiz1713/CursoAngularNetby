import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Output() menuSelected = new EventEmitter<number>();
  canAccessToMenu = localStorage.getItem('canAccessToMenu');

  menu: { title: string; route: string }[] = [
    {
      title: 'Categorias',
      route: 'categories',
    },
    {
      title: 'Clientes',
      route: 'customers',
    },
    {
      title: 'Menu',
      route: 'menu',
    },
    {
      title: 'Ordenes',
      route: 'orders',
    },
    {
      title: 'Ejemplos @defer',
      route: 'defer',
    },
  ];

  selectMenu(index: number): void {
    this.menuSelected.emit(index);
  }
}
