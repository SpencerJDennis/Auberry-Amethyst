import React, { useState } from "react";
import { FAQData } from "./FAQData";

const FAQ = () => {
  const [clicked, setClicked] = useState(false);
  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <div className="faq" id="faq">
      <h1 className="faqHeader">Frequently Asked Questions</h1>
      <div className="faqQuestions">
        {FAQData.map((q, index) => {
          return (
            <React.Fragment key={index}>
              <div className="faqItem" id="faqQuestion">
                <h5
                  className="question"
                  onClick={() => toggle(index)}
                >
                  {q.question}
                  <span>
                    {clicked !== index ? (
                      <ion-icon name="add"></ion-icon>
                    ) : (
                      <ion-icon name="remove"></ion-icon>
                    )}
                  </span>
                </h5>
                {clicked === index ? (
                  <p className="answer">{q.answer}</p>
                ) : null}
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;