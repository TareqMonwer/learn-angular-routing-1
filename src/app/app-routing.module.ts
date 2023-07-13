import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AnimalsComponent } from './animals/animals.component';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { AnimalResolver } from './resolvers/animal.resolver';
import { ProductsListComponent } from './products-list/products-list.component';
import { AuthGuard } from './guards/auth.guard';
import { ProductsResolver } from './resolvers/products.resolver';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'animals',
    component: AnimalsComponent,
    // children: [
    //   {
    //     path: ':name',
    //     component: AnimalDetailComponent,
    //     resolve: {
    //       data: AnimalResolver
    //     },
    //   }
    // ]
  },
  {
    path: 'animals/:name',
    component: AnimalDetailComponent,
    resolve: {
      data: AnimalResolver
    },
  },
  {
    path: 'products',
    component: ProductsListComponent,
    canActivate: [AuthGuard],
    resolve: {
      data: ProductsResolver
    },
    children: [
      {
        path: ':productId',
        component: ProductDetailComponent,
        resolve: {
          data: ProductsResolver
        }
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
