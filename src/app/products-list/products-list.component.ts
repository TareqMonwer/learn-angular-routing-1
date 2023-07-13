import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product';
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products$: Observable<Product[]> = new Observable<Product[]>();
  
  constructor(
    private activatedRoute: ActivatedRoute,
    public productsService: ProductsService
  ) { }

  ngOnInit(): void {
    // // get products by service call
    // this.productsService.getProducts().subscribe({
    //   next: (products) => {
    //     this.products$ = of(products);
    //     },
    //   error: (error) => { }
    // })

    // get products by resolver
    this.activatedRoute.data.subscribe((response) => {
      this.products$ = of(response['data'])
    })
  }
}
