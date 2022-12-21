import React from "react";
import JotformEmbed from 'react-jotform-embed';

const ContactUs = () => {
  return (
    <div id="contact">
      <h1 className="contactHeader">Contact Us</h1>
      <JotformEmbed src="https://form.jotform.com/jsform/223546587300153" />
    </div>
  );
};

export default ContactUs;