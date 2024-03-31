import logo from "./logo.svg";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import InvoicePage from "./components/InvoicePage/InvoicePage";
import InvoiceDetail from "./components/InvoiceDetail/InvoiceDetail";
import { invoiceData } from "./components/utills";

function App() {
  const [invoiceList, setInvoiceList] = useState(invoiceData);

  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <div className="nav-container">
            <NavBar />
          </div>
          <Routes>
            <Route
              exact
              path="/invoice"
              element={<InvoicePage invoiceList={invoiceList} />}
            />
            <Route
              exact
              path="/invoice/create"
              element={
                <InvoiceDetail
                  mode={"create"}
                  setInvoiceList={setInvoiceList}
                />
              }
            />
            <Route
              exact
              path="/invoice/:invoiceId"
              element={<InvoiceDetail mode={"edit"} />}
            />
          </Routes>
        </div>

        {/* <Link to={"/login"}>Login</Link> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
