import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'products' },
    {
        path: 'products',
        loadComponent: () =>
            import('./features/products/pages/product-list/product-list').then(m => m.ProductList)
    },
    {
        path: 'products/:id',
        loadComponent: () =>
            import('./features/products/pages/product-detail/product-detail').then(
                m => m.ProductDetail
            )
    },
    { path: '**', redirectTo: 'products' }
];
