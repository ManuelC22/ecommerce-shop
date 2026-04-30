import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service';

@Component({
    selector: 'app-product-list',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './product-list.html',
    styleUrl: './product-list.css'
})
export class ProductList {
    private srv = inject(ProductsService);
    items = this.srv.products;

    q = signal('');
    onlyAvailable = signal(false);

    filtered = computed(() => {
        const term = this.q().toLowerCase();
        const list = this.items();
        let r = list.filter(p => p.name.includes(term));
        if (this.onlyAvailable()) {
            r = r.filter(p => p.stock === 0);
        }
        return r;
    });

    toggle() {
        this.onlyAvailable.set(!this.onlyAvailable());
    }
}
