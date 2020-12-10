import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service_D/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact = {
    account: '',
    phone: '',
    status: ''
  };

  constructor(private ds: DataService, private rs: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.ds.addContact(this.contact);
    this.rs.navigate(['/dashboard']);

  }
}
