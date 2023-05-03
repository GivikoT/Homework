import React, { useEffect } from "react";
import "./contact.css";

const Contact = () => {
  useEffect(() => {
    document.title = "UniFinder | Contact Us";

    return () => {
      document.title = "UniFinder | Find Your Future";
    };
  }, []);
  return (
    <div>
      <div className="con">
        <div className="con-box">
          <div className="left"></div>
          <div className="right">
            <h2 className="name">Contact Us</h2>
            <input type="text" className="field" placeholder="Your Name" />
            <input type="email" className="field" placeholder="Your Email" />
            <input type="text" className="field" placeholder="Your Phone" />
            <textarea className="field area" placeholder="Message"></textarea>
            <button className="btn">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
