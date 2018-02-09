import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RegisterService } from './../service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})

export class RegisterComponent implements OnInit {
  public user: any;
  constructor(private router: Router, private activatedRoute: ActivatedRoute ,
              private registerService: RegisterService) {

  }

  ngOnInit(){
    this.user = {};
  }

  goToHome(){
    this.router.navigate(['/']);
  }

  onSubmit() {
    this.registerService.Add(this.user).subscribe(respone => {
      if(respone) {
        this.router.navigate(['/']);
      }
    })
  }
}
