// 資料模型:聯絡人 ,為介面檔，提供欄位規範
export interface Contact {
    account: string;       // 聯絡人姓名
    phone: string;      // 手機號碼
    status: string;     // 聯絡人狀態: 商機, 機會, 客戶, 歸檔
}
