import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-product-filter',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './product-filter.html',
    styleUrl: './product-filter.css'
})
export class ProductFilter {
    @Output() searchChange = new EventEmitter<string>();
    term = '';

    onChange(value: string) {
        this.term = value;
        this.searchChange.emit(value);
    }
}
