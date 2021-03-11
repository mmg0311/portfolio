import React, { useState } from "react";
import { db } from "../../config/fbConfig";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("contacts")
      .add({ name, email, message })
      .then(() => {
        setSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        setSuccess(false);
        console.log(error);
      });

    console.log(name);
  };
  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <div className="contact__info">
          <div className="contact__links">
            <h3>Get In Touch</h3>
            <div className="contact__linksContainer">
              <ul>
                <li>
                  <a href="mailto:mohakgadge@gmail.com">
                    <i className="fas fa-envelope"></i> mohakgadge@gmail.com
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/mohakgadge/">
                    <i className="fab fa-linkedin-in"></i> LinkedIn
                  </a>
                </li>
                <li>
                  <a href="tel:+917798750281">
                    <i className="fab fa-whatsapp"></i> +91-7798750281
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="contact__formContainer">
            <form className="contact__form">
              <label htmlFor="fname">Full Name</label>
              <input
                type="text"
                id="fname"
                name="name"
                placeholder="Your name.."
                vlaue={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label htmlFor="mail">Email ID</label>
              <input
                type="text"
                id="mail"
                name="mailid"
                placeholder="Your email id.."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="subject">Subject</label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <span className="submit__btn" onClick={handleSubmit}>
                Submit <i className="fas fa-paper-plane"></i>
              </span>
            </form>
          </div>
        </div>
        {success === "" ? (
          <></>
        ) : success === true ? (
          <div className="alert success">
            <p>
              <span>
                <i className="far fa-check-circle fa-lg"></i> Thank you
              </span>{" "}
              for contacting!!
            </p>
          </div>
        ) : (
          <div className="alert fail">
            <p>
              <span>
                <i className="fas fa-exclamation-triangle"></i> Sorry
              </span>{" "}
              currently site is under maintenance
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
