import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Layout from "./Component/Layout";
import Balance from "./Component/Balance";
import Form from "./Component/Form";
import Transactions from "./Component/Transactions";

function App() {
  return (
    <Layout>
      <Balance />
      <Form />
      <Transactions />
    </Layout>
  );
}

export default App;
