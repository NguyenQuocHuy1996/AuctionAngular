import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { ProductService } from './../../../service/product.service';

@Component ({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnDestroy {
  public product: any;
  public id: number;
  public subscription: Subscription;
  constructor(private router: Router, private activatedRoute: ActivatedRoute ,private productService: ProductService) {
  }

  ngOnInit(){
    this.subscription = this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });

    this.productService.getOneProduct(this.id).subscribe((data) => {
      this.product = data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

