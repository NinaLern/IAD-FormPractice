import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../_models/contact';
import { DataService } from '../service_D/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // @Input() a: string | undefined;
  // account = '';
  account: string;

  // 在DashBoard裡面顯示全部聯絡人
  contacts:Contact[] = [];


  constructor(private route: ActivatedRoute, public ds: DataService) {
    this.account = '' + route.snapshot.paramMap.get('account');
   }

  ngOnInit(): void {
    // 保險預防當輸入的是空的
    this.contacts = this.ds.getAll();
  }
}
