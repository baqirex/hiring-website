import { useState } from "react";
import FooterList from "./footerList";

const PrivacyList = () => {
  const [list, setList] = useState(["About us", "Careers", "Blog", "Partners"]);
  return <FooterList heading="Privacy Policy" list={list} />;
};

export default PrivacyList;
