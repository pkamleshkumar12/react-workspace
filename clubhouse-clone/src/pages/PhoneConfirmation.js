import React, { useState } from "react";
import style from "../style/phoneConfirm.module.css";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-number-input";

export default function PhoneConfirmation() {
  const [value, setValue] = useState();
  return (
    <div className={style.phoneConfirmContainer}>
      <Link  to="/" className={style.backBtn}>
        <img src="images/arrow.png" alt="" />
      </Link>
      <h1>Enter your phone</h1>
      <PhoneInput
        international
        defaultCountry="IN"
        value={value}
        onChange={setValue}
      />
      <p>
        By entering your number, you're agreeing to our{" "}
        <span>Terms of Services and Privacy Policy.</span> Thanks!
      </p>
      <Link
        
        to="/code_confirm"
        className="primaryBtn d-flex align-items-center"
      >
        Next
        <img src="/images/nextArrowicon.svg" className="ml-1" />
      </Link>
    </div>
  );
}
