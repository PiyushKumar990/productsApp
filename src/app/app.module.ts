import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductsDataService } from './products-data-service';
import { ApiService } from './api.service';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './add-products/add-products.component';
import { EditProductsComponent } from './edit-products/edit-products.component';
import { ListProductsComponent } from './list-products/list-products.component';
export const routerConfig: Routes = [
  {
      path: 'add',
      component: AddProductsComponent
  },
  {
      path: 'edit',
      component: EditProductsComponent
  },
  {
      path: 'get',
      component: ListProductsComponent
  },
  {
      path: '',
      redirectTo: '/add',
      pathMatch: 'full'
  },
  {
      path: '**',
      redirectTo: '/add',
      pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    AddProductsComponent,
    EditProductsComponent,
    ListProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      routerConfig,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [ProductsDataService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
