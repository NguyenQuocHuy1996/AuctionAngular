import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutes } from './app.routes';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { Page404Component } from './404/page-404.componnent';

import { HeaderComponent } from './home/header/header.component';
import { SliderComponent } from './home/slider/slider.component';
import { FooterComponent } from './home/footer/footer.component';

import { MainHomeComponent } from './home/main/main-home/main-home.component';
import { DangSPComponent } from './home/main/dang-sp/dang-sp.component';
import { CategoryComponent } from './home/main/category/category.component';
import { DetailComponent } from './home/main/detail/detail.component';
import { SanPhamDaDangComponent } from './home/main/sp-da-dang/sp-da-dang.component';

import { SideBarHomeComponent } from './home/main/sidebar/sidebarHome.component';

import { ProductService } from './service/product.service';
import { CategoryService } from './service/category.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, LoginComponent, RegisterComponent, Page404Component,
    HeaderComponent, SliderComponent, FooterComponent,
    MainHomeComponent, DangSPComponent, CategoryComponent, SanPhamDaDangComponent, DetailComponent,
    SideBarHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutes
  ],
  providers: [ProductService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
