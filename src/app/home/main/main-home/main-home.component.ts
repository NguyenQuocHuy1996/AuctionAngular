import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/service/product.service';
import { CategoryService } from 'app/service/category.service';

@Component({
  selector: 'app-main',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})

export class MainHomeComponent implements OnInit {
  public products: any[];
  public categorys: any[];
  constructor(private productService: ProductService, private categoryService: CategoryService) {

  }

  ngOnInit() {
      this.categoryService.getList().subscribe((response: any) => {
        this.categorys = response;
      });
      this.productService.getList().subscribe((response: any) => {
          this.products = response;
      });
  }
}
