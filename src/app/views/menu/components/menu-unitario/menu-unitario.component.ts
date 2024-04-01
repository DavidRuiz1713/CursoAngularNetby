import { Component, Input } from '@angular/core';
import { Menu } from '../../../../core/interface/menu/menu';

@Component({
  selector: 'menu-unitario',
  standalone: true,
  imports: [],
  templateUrl: './menu-unitario.component.html',
  styleUrl: './menu-unitario.component.scss',
})
export class MenuUnitarioComponent {
  @Input() idMenu: number = 0;
  @Input({ required: true }) menu!: Menu[];
}
