import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
    selector: 'app-product-list',
    standalone: true,
    imports: [CurrencyPipe, RouterLink],
    templateUrl: './product-list.html',
    styleUrl: './product-list.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductList {
    private srv = inject(ProductsService);
    products = this.srv.products;
}
