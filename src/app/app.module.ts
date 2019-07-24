import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    LoginComponent,
    AboutComponent,
    AddEditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot ([
      { path: '', component: HomeComponent },
      { path: 'products', component: ProductsComponent},
      { path: 'login', component: LoginComponent},
      { path: 'about', component: AboutComponent},
      { path: 'add-edit-product', component: AddEditProductComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
