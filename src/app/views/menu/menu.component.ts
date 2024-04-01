import { CommonModule } from '@angular/common';
import { Component, inject, Signal } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { octPlus } from '@ng-icons/octicons';
import { MenuServices } from '../../core/services/menu.service';
import { Menu } from '../../core/interface/menu/menu';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { menuComponents } from './components/menu-components';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, NgIconComponent, menuComponents],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  viewProviders: [provideIcons({ octPlus })],
})
export class MenuComponent {
  private menuService = inject(MenuServices);
  private activatedRoute = inject(ActivatedRoute);
  // categories: Signal<Categories[] | undefined> = toSignal(
  //   this.categoryService.getAllCategories()
  menu: Signal<Menu[] | undefined> = toSignal(this.menuService.allMenu$); // this.categoryService.getCategories();
  showForm: boolean = false;
  idMenu: number = 0;

  // router: any;

  // constructor() {
  //   this.getAllMenu();
  // }
  constructor(private router: Router, private route: ActivatedRoute) {
    this.getAllMenu();
  }

  showFormFn(): void {
    this.showForm = !this.showForm;
  }

  addDataFn(data: Menu): void {
    data.id = this.menu()!.length + 1;
    // this.categories.push(data);
    this.menuService.postNewCategory(data).subscribe(console.log);
    this.showForm = false;
  }
  private getAllMenu(): void {
    // this.categoryService
    //   .getAllCategories()
    //   .subscribe((response) => (this.categories = response));
    this.menuService.getAllMenu().subscribe(console.log);
  }
  enviarPlato(plato: number): void {
    this.router.navigate([plato], { relativeTo: this.route });
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.idMenu = data['id'];
    });
  }
}
