import { Component, inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
    selector: 'app-product-form',
    standalone: true,
    imports: [ReactiveFormsModule, RouterLink],
    templateUrl: './product-form.html',
    styleUrl: './product-form.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductForm implements OnInit {
    private fb = inject(FormBuilder);
    private srv = inject(ProductsService);
    private route = inject(ActivatedRoute);
    private router = inject(Router);

    editingId: number | null = null;

    form = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
        price: [0, [Validators.required]],
        stock: ['', [Validators.required]],
        category: ['', [Validators.required]],
        description: ['']
    });

    ngOnInit() {
        const idParam = this.route.snapshot.paramMap.get('id');
        if (idParam) {
            const product = this.srv.findById(Number(idParam));
            this.editingId = Number(idParam);
            this.form.patchValue({
                name: product?.name,
                price: product?.price
            });
        }
    }

    save() {
        const value = this.form.value;
        const payload = {
            name: value.name!,
            price: value.price!,
            stock: value.stock as unknown as number,
            category: value.category!,
            description: value.description ?? ''
        };

        if (this.editingId) {
            this.srv.update(this.editingId, payload);
        } else {
            this.srv.create(payload);
        }
        this.router.navigateByUrl('/products');
    }
}
