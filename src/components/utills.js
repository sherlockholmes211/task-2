export const columns = [
  "Id",
  "date",
  "InvoiceNo",
  "CustomerName",
  "ShippingAddress",
  "GSTIN",
  "TotalAmount",
];

export const invoiceData = [
  {
    Id: 1,
    date: new Date().toDateString(),
    InvoiceNo: 1,
    CustomerName: "Vishnu",
    ShippingAddress: "Kurnool",
    GSTIN: "12435",
    TotalAmount: 100,
    Items: {
      Id: 1,
      itemName: "car",
      quantity: 1,
      price: 100,
      amount: 2,
    },
    BillSundrys: {
      Id: 1,
      billSundryName: "jad",
      amount: 200,
    },
  },
];

export const initInvoiceData = {
  Id: 1,
  date: new Date().toDateString(),
  InvoiceNo: 1,
  CustomerName: "",
  ShippingAddress: "",
  GSTIN: undefined,
  TotalAmount: 0,
  Items: {
    Id: 1,
    itemName: "",
    quantity: 0,
    price: 0,
    amount: 0,
  },
  BillSundrys: {
    Id: 1,
    billSundryName: "",
    amount: 0,
  },
};
