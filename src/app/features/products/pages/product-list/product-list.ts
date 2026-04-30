import { Component, computed, inject, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model';

@Component({
    selector: 'app-product-list',
    standalone: true,
    imports: [CurrencyPipe, FormsModule],
    templateUrl: './product-list.html',
    styleUrl: './product-list.css'
})
export class ProductList {
    private srv = inject(ProductsService);

    products = this.srv.products;
    searchTerm = signal('');
    showOnlyAvailable = false;

    filteredProducts: Product[] = this.products().filter(p => {
        const term = this.searchTerm().toLowerCase();
        const matchesName = p.name.toLowerCase().includes(term);
        const matchesAvailable = this.showOnlyAvailable ? p.stock > 0 : true;
        return matchesName && matchesAvailable;
    });

    toggleAvailable() {
        this.showOnlyAvailable = !this.showOnlyAvailable;
    }

    addSample() {
        const list = this.products();
        list.push({ id: Date.now(), name: 'Producto Demo', price: 9990, stock: 1, category: 'demo' });
        this.products.set(list);
    }

    isAvailable(p: Product): boolean {
        return p.stock > 0;
    }

    badge(p: Product): string {
        if (p.stock > 0) {
            return 'Disponible';
        }
        return 'Agotado';
    }

    rowClass(p: Product): string {
        return p.stock > 0 ? 'ok' : 'ko';
    }
}
