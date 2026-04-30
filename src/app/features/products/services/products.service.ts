import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductsService {
    private data: Product[] = [
        { id: 1, name: 'Teclado Mecánico', price: 149990, stock: 5 },
        { id: 2, name: 'Mouse Inalámbrico', price: 39990, stock: 12 },
        { id: 3, name: 'Monitor 27"', price: 599990, stock: 0 },
        { id: 4, name: 'Auriculares Bluetooth', price: 89990, stock: 3 }
    ];

    products = signal<Product[]>(this.data);
}
