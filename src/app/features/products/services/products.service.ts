import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductsService {
    private data: Product[] = [
        { id: 1, name: 'Teclado Mecánico', price: 149990, stock: 5, category: 'periféricos' },
        { id: 2, name: 'Mouse Inalámbrico', price: 39990, stock: 12, category: 'periféricos' },
        { id: 3, name: 'Monitor 27"', price: 599990, stock: 0, category: 'pantallas' },
        { id: 4, name: 'Auriculares Bluetooth', price: 89990, stock: 3, category: 'audio' },
        { id: 5, name: 'Webcam HD', price: 79990, stock: 7, category: 'video' }
    ];

    products = signal<Product[]>(this.data);
}
