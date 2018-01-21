import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit, OnDestroy {
  public _id: number;
  public sub: Subscription;
  constructor (private router:Router, private activateRoute: ActivatedRoute){

  }

  ngOnInit(){
    this.sub = this.activateRoute.params.subscribe(params=>{
      this._id = params ['id'];
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
