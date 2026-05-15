import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model';

@Component({
    selector: 'app-product-detail',
    standalone: true,
    imports: [CurrencyPipe, RouterLink],
    templateUrl: './product-detail.html',
    styleUrl: './product-detail.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetail {
    private route = inject(ActivatedRoute);
    private srv = inject(ProductsService);

    product = signal<Product | undefined>(undefined);

    constructor() {
        const id = this.route.snapshot.paramMap.get('id');
        this.product.set(this.srv.findById(id ?? ''));
    }

    isAvailable(p: Product): boolean {
        return p.stock >= 5;
    }
}
