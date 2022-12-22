import React from "react";
import JotformEmbed from 'react-jotform-embed';
import PropTypes from 'prop-types';

const ContactUs = () => {
  return (
    <div id="contact">
      <h1 className="contactHeader">Contact Us</h1>
      <div id="contactform">
      <JotformEmbed src="https://www.jotform.com/223546587300153" />
      </div>
    </div>
  );
};

// ContactUs.propTypes = {
//   contact: PropTypes.object
// }

export default ContactUs;