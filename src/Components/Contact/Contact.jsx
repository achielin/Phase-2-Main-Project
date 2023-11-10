import { queryAllByAttribute } from '@testing-library/react';
import React, { useRef } from 'react';
import './Contact.css';

const Contact = () => {
    const form = useRef();

     function handleSubmit(e) {
       e.preventDefault();
       alert("Sent");
     }

  return (
    <div className="container contact__container">
      <form ref={form}>
        <input type="text" name="name" placeholder="Your Full Name" />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea
          name="message"
          rows="7"
          placeholder="Your Message"
          required
        ></textarea>
        <button
          type="submit"
          onClick={() => alert("Sent")}
          required
          className="btn btn-primary"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact