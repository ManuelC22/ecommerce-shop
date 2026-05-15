import { Component, computed, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model';

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

    onlyAvailable = signal(false);

    products = computed<Product[]>(() => {
        const list = this.srv.getProducts();
        if (this.onlyAvailable()) {
            return list.filter(p => p.stock > 0);
        }
        return list;
    });

    toggleAvailable() {
        this.onlyAvailable.update(v => !v);
    }

    addStock(p: Product) {
        const list = this.srv.getProducts();
        const target = list.find(x => x.id === p.id);
        if (target) {
            target.stock = target.stock + 1;
        }
    }
}
