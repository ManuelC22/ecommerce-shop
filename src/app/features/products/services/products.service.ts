import { Injectable, signal, computed } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductsService {
    private _products = signal<Product[]>([
        {
            id: 1,
            name: 'Teclado Mecánico',
            price: 149990,
            stock: 5,
            category: 'periféricos',
            description: 'Teclado mecánico retroiluminado con switches azules.'
        },
        {
            id: 2,
            name: 'Mouse Inalámbrico',
            price: 39990,
            stock: 12,
            category: 'periféricos',
            description: 'Mouse ergonómico de 1600 DPI con conexión 2.4 GHz.'
        },
        {
            id: 3,
            name: 'Monitor 27"',
            price: 599990,
            stock: 0,
            category: 'pantallas',
            description: 'Monitor IPS 27 pulgadas, 144Hz, resolución QHD.'
        }
    ]);

    readonly products = this._products.asReadonly();

    findById(id: number): Product | undefined {
        return this._products().find(p => p.id === id);
    }

    create(data: Omit<Product, 'id'>): Product {
        const id = Math.max(0, ...this._products().map(p => p.id)) + 1;
        const created: Product = { id, ...data };
        this._products.update(list => [...list, created]);
        return created;
    }

    update(id: number, data: Omit<Product, 'id'>): void {
        this._products.update(list =>
            list.map(p => (p.id === id ? { id, ...data } : p))
        );
    }
}
