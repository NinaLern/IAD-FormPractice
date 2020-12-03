import { Contact } from './contact';

export interface ContactDAO {
    // ()中定義欄位類型 -> _:_ 資料名稱:資料類型
    addContact(c: Contact): null;
    getAll(): Contact[];          // 新增一位聯絡人
    // removeContact(cid: string): null;      // 刪除某位聯絡人
    // setContact(cid: string, d: any): null; // 修改某位聯絡人某些欄位
    // getContact(cid: string): Contact;         // 讀取某位聯絡人資料
    // getContacts(limit?: number): Contact[];     // 讀取多位聯絡人資料
}
