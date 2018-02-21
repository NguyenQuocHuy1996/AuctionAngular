import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../../service/product.service';
import { LoginService } from './../../../service/login.service';
import { CategoryService } from './../../../service/category.service';

@Component ({
  selector: 'app-dangSP',
  templateUrl: './dang-sp.componnent.html',
  styleUrls: ['./dang-sp.component.css']
})
export class DangSPComponent implements OnInit {
  public products: any[];
  public categorys: any[];
  proname: string;
  brand: string;
  warrantyperiod: string;
  note: string;
  cateID: number;
  constructor(private productService: ProductService, private loginService: LoginService, private categoryService: CategoryService) {

  }

  ngOnInit(){
    this.productService.getProductbyUser(String(this.loginService.UserName())).subscribe((data) => {
      this.products = data;
    });

    this.categoryService.getList().subscribe((response: any) => {
      this.categorys = response;
    }, error => alert('Error: ' + error));
  }

  onProNameType(value: any){
    this.proname = value;
  }
  onBrandType(value: any){
    this.brand = value;
  }
  onWarrantyperiodType(value: any){
    this.warrantyperiod = value;
  }
  onNoteType(value: any){
    this.note = value;
  }

  callType(value: number){
    this.cateID = value;
  }

  onSubmit(){
    const product = {
      cateID: this.cateID,
      proname: this.proname,
      brand: this.brand,
      warrantyperiod: this.warrantyperiod,
      auction: 15,
      mainimage: 'mainimage 2',
      smallimage1: 'smallimage1 2',
      smallimage2: 'smallimage2 2',
      smallimage3: 'smallimage3 2',
      note: this.note,
      username: this.loginService.UserName()
    }
    this.productService.Add(product).subscribe(respone => {
        console.log(respone);
        //alert('Đăng sản phẩm thành công');
        //this.router.navigate(['/']);
    }, error => alert('Error: ' + error));
  }
}


