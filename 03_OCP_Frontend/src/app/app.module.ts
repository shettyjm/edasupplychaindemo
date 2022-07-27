import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OwlModule } from 'ngx-owl-carousel';
import { AboutComponent } from './components/about/about.component';
import { OrderComponent } from './components/order/order.component';
import { ServiceComponent } from './components/service/service.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './components/nav/nav.component';
import { AuthService } from './guards/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { SupplierComponent } from './components/supplier/supplier.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    AboutComponent,
    OrderComponent,
    ServiceComponent,
    LoginComponent,
    NavComponent,
    SupplierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    OwlModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

declare global {
  interface Window {
 
    API_GW_URL?:any;
    BACKEND_SC_API_URL?:any;
  }
}
