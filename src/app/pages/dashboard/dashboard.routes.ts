import { Routes } from '@angular/router';
import { CategoriesServices } from '../../core/services/categories.service';
import { menuGuard } from '../../core/guards/menu.guard';
import { resolverCategoryResolver } from '../../core/resolvers/resolver-category.resolver';
import { MenuServices } from '../../core/services/menu.service';
import { resolverMenuResolver } from '../../core/resolvers/resolver-menu.resolver';

const routes: Routes = [
  {
    path: 'categories',
    loadComponent: () =>
      import('../../views/categories/categories.component').then(
        (m) => m.CategoriesComponent
      ),
    providers: [CategoriesServices],
    resolve: { categories: resolverCategoryResolver },
  },
  {
    path: 'categories/:id',
    loadComponent: () =>
      import('../../views/categories/categories.component').then(
        (m) => m.CategoriesComponent
      ),
    providers: [CategoriesServices],
    // resolve: { categories: resolverCategoryResolver }
  },
  {
    path: 'customers',
    loadComponent: () =>
      import('../../views/customers/customers.component').then(
        (m) => m.CustomersComponent
      ),
    providers: [CategoriesServices],
  },
  {
    path: 'menu',
    loadComponent: () =>
      import('../../views/menu/menu.component').then((m) => m.MenuComponent),
    providers: [MenuServices],
    canActivate: [menuGuard],
    resolve: { categories: resolverMenuResolver },
  },
  {
    path: 'menu/:id',
    loadComponent: () =>
      import('../../views/menu/menu.component').then((m) => m.MenuComponent),
    providers: [MenuServices],
  },
  {
    path: 'orders',
    loadComponent: () =>
      import('../../views/orders/orders.component').then(
        (m) => m.OrdersComponent
      ),
  },
  // {
  //     path: 'defer',
  //     loadComponent: () => import('../../views/defer/defer.component'),
  // },
  {
    path: '',
    redirectTo: 'categories',
    pathMatch: 'full',
  },
];

export default routes;
