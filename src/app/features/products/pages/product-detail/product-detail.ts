import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
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

    product: Product | undefined;

    constructor() {
        const id = this.route.snapshot.paramMap.get('id');
        this.product = this.srv.products().find(p => p.id === id);
    }
}
