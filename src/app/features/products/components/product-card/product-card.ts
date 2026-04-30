import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
    selector: 'app-product-card',
    standalone: true,
    imports: [CurrencyPipe],
    templateUrl: './product-card.html',
    styleUrl: './product-card.css'
})
export class ProductCard {
    @Input() item!: Product;

    aplicarDescuento() {
        this.item.price = this.item.price - 5000;
    }
}
