import React from "react";
import InvoiceTable from "../InvoiceTable/InvoiceTable";
import { Button } from "@mui/material";
import "./InvoicePage.css";
import { useNavigate } from "react-router-dom";

const InvoicePage = ({ invoiceList }) => {
  const navigate = useNavigate();
  const handleAddInvoice = () => {
    navigate("/invoice/create");
  };
  return (
    <div className="invoice-page-container">
      <div className="header-container">
        <Button variant="outlined" onClick={handleAddInvoice}>
          Add
        </Button>
      </div>
      <div>
        <InvoiceTable invoiceList={invoiceList} />
      </div>
    </div>
  );
};

export default InvoicePage;
