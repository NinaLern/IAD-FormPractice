import { Injectable } from '@angular/core';
import { ContactDAO } from '../_models/contactDAO';
import { Contact } from '../_models/contact';

@Injectable({
  providedIn: 'root'
})
export class DataService implements ContactDAO {
  // 需定義介面設定的欄位
  addContact(c: Contact): null {
    throw new Error('Method not implemented.');
  }
  getAll(): Contact[] {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
