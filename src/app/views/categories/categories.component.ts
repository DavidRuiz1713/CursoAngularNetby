import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Signal,
} from '@angular/core';
import { categoriesComponents } from './components/categories-components';
import { Categories } from '../../core/interface/categories/categories';
import { CategoriesServices } from '../../core/services/categories.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'categories',
  standalone: true,
  imports: [CommonModule, ...categoriesComponents],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesComponent {
  private categoryService = inject(CategoriesServices);
  private activatedRoute = inject(ActivatedRoute);
  // categories: Signal<Categories[] | undefined> = toSignal(
  //   this.categoryService.getAllCategories()
  categories: Signal<Categories[] | undefined> = toSignal(
    this.categoryService.allCategories$
  ); // this.categoryService.getCategories();
  showForm: boolean = false;

  constructor() {
    this.getAllCategories();
  }

  showFormFn(): void {
    this.showForm = !this.showForm;
  }

  addDataFn(data: Categories): void {
    data.id = this.categories()!.length + 1;
    // this.categories.push(data);
    this.categoryService.postNewCategory(data).subscribe(console.log);
    this.showForm = false;
  }
  private getAllCategories(): void {
    // this.categoryService
    //   .getAllCategories()
    //   .subscribe((response) => (this.categories = response));
    this.categoryService.getAllCategories().subscribe(console.log);
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      console.log(data);
      if (data['id']) {
        this.showFormFn();
      }
    });
  }
}
