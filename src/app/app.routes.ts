import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { Page404Component } from './404/page-404.componnent';

import { MainComponent } from './home/main/main.component';

import { MainHomeComponent } from './home/main/main-home/main-home.component';
import { DangSPComponent } from './home/main/dang-sp/dang-sp.component';
import { CategoryComponent } from './home/main/category/category.component';
import { SanPhamDaDangComponent } from './home/main/sp-da-dang/sp-da-dang.component';
import { DetailComponent } from './home/main/detail/detail.component';

import { CheckLoginGuard } from './guards/checkLogin.guard';

import { FormdataUploadComponent } from './home/main/uploadDemo/uploadDemo.component';

const routing: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      {
        path: '', component: MainComponent,
        children: [
          { path: '', component: MainHomeComponent },
          { path: 'san-pham/:id', component: DetailComponent },
          { path: 'danh-muc/:id', component: CategoryComponent }
        ]
      },
      { path: 'dang-san-pham', component: DangSPComponent, canActivate: [CheckLoginGuard] },
      { path: 'san-pham-da-dang', component: SanPhamDaDangComponent, canActivate: [CheckLoginGuard] },
      { path: 'demo-upload-image', component: FormdataUploadComponent },
    ]
  },
  { path: 'dang-nhap', component: LoginComponent },
  { path: 'dang-ky', component: RegisterComponent },
  { path: '**', component: Page404Component }
]

export const AppRoutes = RouterModule.forRoot(routing);
