import React,{useRef} from "react";
import "./contact.css";
import facebook from "../../assets/fb.png";
import twitter from "../../assets/twitter-circle.png";
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/insta.png";
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_llx8o0d",
        "template_s3mm6rq",
        form.current,
        "Wc9KtleiUh6r-anvi"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contactPage">
      <h1 className="contactTitle">Contact Me</h1>
      <span className="contactDesc">
        Please feel free to contact me if you have any questions or concerns.
      </span>
      <form ref={form} className="contactForm"  onSubmit={sendEmail}>
        <input type="text" className="name" name='to_name' placeholder="Your name..." />
        <input type="email" className="email" name='rom_email' placeholder="Your email..." />
        <textarea
          name='message'
          className="msg"
          rows={5}
          placeholder="Your message..."
        ></textarea>
        <button className="submitBtn" value="Send" type="submit" onClick={()=>{
          alert("Your message has been sent successfully");
        }}>
          Send
        </button>
        <div className="links">
          <img href="https://www.instagram.com/vermakashish001/" src={facebook} alt="Facebook" className="link" />
          <img src={twitter} alt="Twitter" srcset="" className="link" />
          <img src={linkedin} alt="LinkedIn" srcset="" className="link" />
          <img src={instagram} alt="Instagram" srcset="" className="link" />
        </div>
      </form>
    </section>
  );
};

export default Contact;
