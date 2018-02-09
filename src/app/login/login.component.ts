import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './../service/login.service';
import { UserService } from 'app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  constructor(private router: Router, private loginService: LoginService, private userService: UserService) {

  }
  public user: any;
  checkLogin(value: any){
    if(value.email == 'admin@gmail.com' && value.pass == '123') {
      this.loginService.SetLogin(true);
      this.loginService.SetUserName('admin@gmail.com');
      this.router.navigate(['/']);
    }else {
      alert('Nhap lai');
    }
  }

  goToHome() {
    this.router.navigate(['/']);
  }

    ngOnInit() {
      this.userService.getOneUser('admin@gmail.com').subscribe((response: any) => {
        this.user = response;
        console.log(response);
      }, error => alert('Error: ' + error));
  }
}
