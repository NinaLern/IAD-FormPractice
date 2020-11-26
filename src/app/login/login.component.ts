import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  account = '';
  password = '';

  // router(引數): Router(服務類型)
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  login() {
    // 在console.log 查看並驗證你打的東西是甚麼
    console.log('輸入的"帳號"資料是:', this.account);
    console.log('輸入的"密碼"資料是:', this.password);

    // 檢驗方法
    // === 等於相等 && 等於相等
    if (this.account === 'abc' && this.password === '123') {
      this.router.navigateByUrl('/dashboard');
    } else {
      // 本業面的彈跳提視窗
      alert('帳號密碼錯誤');
    }
  }

}
