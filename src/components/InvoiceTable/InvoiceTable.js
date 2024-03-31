import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function InvoiceTable({ invoiceList }) {
  function createData(invoice) {
    const {
      Id,
      date,
      InvoiceNo,
      CustomerName,
      ShippingAddress,
      GSTIN,
      TotalAmount,
    } = invoice;
    return {
      Id,
      date,
      InvoiceNo,
      CustomerName,
      ShippingAddress,
      GSTIN,
      TotalAmount,
    };
  }

  const columns = [
    "Id",
    "date",
    "InvoiceNo",
    "CustomerName",
    "ShippingAddress",
    "GSTIN",
    "TotalAmount",
  ];

  console.log("invoiceList", invoiceList);

  const rows = invoiceList.map((invoice) => {
    return createData(invoice);
  });

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((col) => {
              return <TableCell align="right">{col}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
            return (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {columns.map((col) => {
                  return <TableCell align="right">{row[col]}</TableCell>;
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
