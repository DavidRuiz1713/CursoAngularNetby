import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { delay, map } from 'rxjs';
import { CategoriesServices } from '../services/categories.service';

export const resolverCategoryResolver: ResolveFn<boolean> = (route, state) => {
  const categoryService = inject(CategoriesServices);
  return categoryService.getAllCategories().pipe(
    // delay(3000),
    map(() => true)
  );
};
