import { Component, inject, signal, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
export class ProductList implements OnInit {
    private srv = inject(ProductsService);

    products = signal<Product[]>([]);
    loading = signal(true);
    featuredName = signal('');

    ngOnInit() {
        this.srv.getAll().subscribe(list => {
            this.products.set(list);
            this.featuredName.set(list[0].name);
            this.loading.set(false);
        });
    }
}
