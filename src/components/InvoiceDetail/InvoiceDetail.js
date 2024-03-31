import React, { useState } from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";

import { useParams } from "react-router-dom";
import "./InvoiceDetail.css";
import { initInvoiceData, invoiceData } from "../utills";
import { useNavigate } from "react-router-dom";

const InvoiceDetail = ({ mode, invoiceList, setInvoiceList }) => {
  const { invoiceId } = useParams();

  const navigate = useNavigate();

  const [invoice, setInvoice] = useState(
    mode === "create"
      ? initInvoiceData
      : invoiceData.find((invoice) => invoice.Id == invoiceId)
  );

  console.log("invoice", invoice);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvoice((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInvoiceList((prev) => {
      console.log("prev", prev);
      prev.push(invoice);
      return prev;
    });
    navigate("/invoice");
  };

  const handleSave = () => {};

  const handleCancel = () => {
    navigate("/invoice");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h5">Invoice Details</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Invoice Id"
              name="Id"
              value={invoice.Id}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="date"
              name="date"
              type="date"
              value={invoice.date}
              defaultValue={new Date().toDateString()}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="CustomerName"
              name="CustomerName"
              value={invoice.CustomerName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="ShippingAddress"
              name="ShippingAddress"
              value={invoice.ShippingAddress}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="GSTIN"
              name="GSTIN"
              value={invoice.GSTIN}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="TotalAmount"
              name="TotalAmount"
              type="number"
              value={invoice.TotalAmount}
              onChange={handleChange}
            />
          </Grid>
          {mode === "edit" ? (
            <Grid item xs={12} sm={4}>
              <Button variant="contained" color={"info"} type="submit">
                delete
              </Button>
            </Grid>
          ) : null}
          <Grid item xs={12} sm={4}>
            <Button
              variant="contained"
              color={"error"}
              type={"button"}
              onClick={handleCancel}
            >
              cancel
            </Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              onClick={handleSave}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default InvoiceDetail;
