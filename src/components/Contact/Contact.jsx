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
          <a href ="https://www.facebook.com/profile.php?id=100084856876898&mibextid=ZbWKwL" target ="_blank">
          <img src={facebook} alt="Facebook" className="link" /></a>
          <a href ="https://twitter.com/kashishver001" target ="_blank">
          <img src={twitter} alt="Twitter" srcset="" className="link" /></a>
          <a href ="https://www.linkedin.com/in/vermakashish001/" target ="_blank">
          <img src={linkedin} alt="LinkedIn" srcset="" className="link" /></a>
          <a href ="https://www.instagram.com/vermakashish001/" target ="_blank">
          <img src={instagram} alt="Instagram" srcset="" className="link" /></a>
        </div>
      </form>
    </section>
  );
};

export default Contact;
