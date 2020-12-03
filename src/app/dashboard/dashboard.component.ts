import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input() a: string | undefined;
  account = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // 保險預防當輸入的是空的
    this.account = '' + this.route.snapshot.paramMap.get('a');
  }
}
