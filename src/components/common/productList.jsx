import { useState } from "react";
import FooterList from "./footerList";

const ProductList = () => {
  const [list, setList] = useState([
    "Application Tracking",
    "Payroll",
    "People & data analytics",
  ]);
  return <FooterList heading="Product" list={list} />;
};

export default ProductList;
