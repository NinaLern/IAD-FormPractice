import { Injectable } from '@angular/core';
import { ContactDAO } from '../_models/contactDAO';
import { Contact } from '../_models/contact';

@Injectable({
  providedIn: 'root'
})
export class DataService implements ContactDAO {
// 聯絡人陣列
contacts: Contact[] = [];

  // 需定義介面設定的欄位
  addContact(c: Contact): null {
    this.contacts.push(c);
    return null;
  }
  getAll(): Contact[] {
    return this.contacts;
  }

  constructor() { }
}
