import { ResolveFn } from '@angular/router';
import { CategoriesServices } from '../services/categories.service';
import { inject } from '@angular/core';
import { map } from 'rxjs';

export const resolverMenuResolver: ResolveFn<boolean> = (route, state) => {
  const categoryService = inject(CategoriesServices);
  return categoryService.getAllCategories().pipe(map(() => true));
};
