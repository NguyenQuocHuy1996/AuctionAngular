import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutes } from './app.routes';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { Page404Component } from './404/page-404.componnent';

import { HeaderComponent } from './home/header/header.component';
import { SliderComponent } from './home/slider/slider.component';
import { MainComponent } from './home/main/main.component';
import { FooterComponent } from './home/footer/footer.component';

import { MainHomeComponent } from './home/main/main-home/main-home.component';
import { DangSPComponent } from './home/main/dang-sp/dang-sp.component';
import { CategoryComponent } from './home/main/category/category.component';
import { DetailComponent } from './home/main/detail/detail.component';
import { SanPhamDaDangComponent } from './home/main/sp-da-dang/sp-da-dang.component';
import { SanPhamDaDauGiaComponent } from './home/main/sp-da-dau-gia/sp-da-dau-gia.component';

import { SideBarHomeComponent } from './home/main/sidebar/sidebarHome.component';

import { ProductService } from './service/product.service';
import { CategoryService } from './service/category.service';
import { LoginService } from './service/login.service';
import { RegisterService } from './service/register.service';
import { UserService } from './service/user.service';

//Guard for Login
import { CheckLoginGuard } from './guards/checkLogin.guard';

//Pipe Sort
import { Ng2OrderModule } from 'ng2-order-pipe';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, LoginComponent, RegisterComponent, Page404Component,
    HeaderComponent, SliderComponent, MainComponent, FooterComponent,
    MainHomeComponent, DangSPComponent, CategoryComponent, SanPhamDaDangComponent, SanPhamDaDauGiaComponent, DetailComponent,
    SideBarHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutes,
    ReactiveFormsModule,

    Ng2OrderModule
  ],
  providers: [LoginService, RegisterService, UserService,
              ProductService, CategoryService,
              CheckLoginGuard
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
