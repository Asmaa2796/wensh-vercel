import React, { useEffect, useRef } from "react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";
import "intl-tel-input/build/js/utils.js"; // for formatting, validation, etc.
import './vendors.css';
const PhoneInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    const iti = intlTelInput(inputRef.current, {
      initialCountry: "auto",
      geoIpLookup: function (callback) {
        fetch("https://ipapi.co/json")
          .then((res) => res.json())
          .then((data) => callback(data.country_code))
          .catch(() => callback("us"));
      },
      utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    });

    return () => {
      iti.destroy();
    };
  }, []);

  return (
    <div className="w-100">
      <input name="phone" ref={inputRef} type="tel" id="phone" />
    </div>
  );
};

export default PhoneInput;
