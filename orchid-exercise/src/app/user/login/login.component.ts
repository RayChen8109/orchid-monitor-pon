import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { environment } from 'src/environments/environment';
import { UserService } from '../user.service';
import { Md5 } from "ts-md5";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  oneDayMillisecond = (24 * 60 * 60 * 1000);
  isCorrect = false; /*帳號密碼錯誤提示 */
  loginForm = new FormGroup({
    user: new FormControl(''),
    password: new FormControl(''),
    rememberme: new FormControl(false),
  });
  userParam = {} as IUser;

  constructor(
    private api: ApiService,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    if (localStorage.getItem(environment.sessionStorageName)) {
      localStorage.removeItem(environment.sessionStorageName);
    }
    this.userService.loginStatus = false;
  }

  onSubmit() {
    console.log(this.loginForm.value['rememberme']);
    
    this.userParam.user = this.loginForm.value['user'];
    this.userParam.password = Md5.hashStr(this.loginForm.value['password']);

    this.api.getAdmin(this.userParam).subscribe(res => {
      if (Object.keys(res).length > 0) {
        if (this.loginForm.value['rememberme']) {
          const obj = {
            time: new Date().getTime(),
            value: this.userParam.user,
            expire: this.oneDayMillisecond * 3650 /* 括號內為一天的毫秒數，括號外為幾天 */
          }
          localStorage.setItem(environment.sessionStorageName, JSON.stringify(obj));
        }
        /*設定目前登入狀態為true */
        this.userService.loginStatus = true;
        this.isCorrect = false;
        this.router.navigate(['main']);
      }
      else {
        /*設定目前登入狀態為false */
        this.userService.loginStatus = false;
        this.isCorrect = true;
      }
    });
  }
}

export interface IUser {
  user: string;
  password: string;
}