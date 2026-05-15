import { Component, inject, signal, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
export class ProductDetail implements OnInit {
    private route = inject(ActivatedRoute);
    private srv = inject(ProductsService);

    product = signal<Product | undefined>(undefined);
    loading = signal(true);
    error = signal<string | null>(null);

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id') ?? '';
        this.srv.getById(id).subscribe({
            next: p => {
                this.product.set(p);
                this.loading.set(false);
            },
            error: err => {
                this.error.set(err.message);
                this.loading.set(false);
            }
        });
    }
}
