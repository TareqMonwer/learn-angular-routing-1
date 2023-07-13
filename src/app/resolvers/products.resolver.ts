import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { inject } from '@angular/core';
import { Product } from '../models/product';
import { Observable, filter, take } from 'rxjs';

export const ProductsResolver: ResolveFn<Product[] | Product> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  productsService = inject(ProductsService)
): Observable<Product[] | Product> => {

  const productId = route.paramMap.get('productId')!;

  if (productId) { 
    return productsService.getProduct(Number(productId)).pipe(
      filter<Product>(product => !!product),
      take(1)
    );
  }

  return productsService.getProducts().pipe(
    filter<Product[]>(products => !!products),
    take(1)
  )
};
