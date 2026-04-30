import { Component, computed, inject, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ProductsService } from '../../services/products.service';
import { ProductCard } from '../../components/product-card/product-card';
import { ProductFilter } from '../../components/product-filter/product-filter';

@Component({
    selector: 'app-product-list',
    standalone: true,
    imports: [CurrencyPipe, ProductCard, ProductFilter],
    templateUrl: './product-list.html',
    styleUrl: './product-list.css'
})
export class ProductList {
    private srv = inject(ProductsService);
    items = this.srv.products;

    q = signal('');

    filtered = computed(() => {
        const term = this.q().toLowerCase();
        return this.items().filter(p => p.name.toLowerCase().includes(term));
    });

    onSearched(value: string) {
        this.q.set(value);
    }
}
