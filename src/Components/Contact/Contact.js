import React, { useState } from "react";
import { db } from "../../config/fbConfig";
import emailjs from "emailjs-com";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [failure, setFailure] = useState("currently site is under maintenance");
  const handleSubmit = (e) => {
    e.preventDefault();
    const r = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    /*sending email */
    // putting it in database for furthur use
    if (r.test(email) && Boolean(name) && Boolean(message)) {
      db.collection("contacts")
        .add({ name, email, message })
        .then(() => {
          emailjs
            .sendForm(
              process.env.REACT_APP_EMAILJS_SERVICE_ID,
              process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
              e.target,
              process.env.REACT_APP_EMAILJS_USER_ID
            )
            .then(
              (result) => {
                console.log(result.text);
              },
              (error) => {
                console.log(error.text);
              }
            );
          setSuccess(true);
          setName("");
          setEmail("");
          setMessage("");
          setFailure("currently site is under maintenance");
        })
        .catch((error) => {
          setSuccess(false);

          console.log(error);
        });
    } else {
      setSuccess(false);
      setFailure("Enter valid details to proceed");
    }
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
            <form className="contact__form" onSubmit={handleSubmit}>
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
              <button className="submit__btn" type="submit">
                Submit <i className="fas fa-paper-plane"></i>
              </button>
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
                <i className="fas fa-exclamation-triangle"></i>{" "}
                {failure === "currently site is under maintenance"
                  ? "Sorry"
                  : "Please"}
              </span>
              {" " + failure}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
