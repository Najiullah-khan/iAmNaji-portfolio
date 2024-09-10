import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, EMAIL_JS_PUBLIC_KEY } from "../constants";
import Footer from "./Footer";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const { name, email, message } = form;

    if (!name.trim() || !email.trim() || !message.trim()) {
      setLoading(false);
      toast.error("Please fill all the fields.", {
        position: 'bottom-right',
      });
      return;
    }

    emailjs
      .send(
        EMAIL_JS_SERVICE_ID,
        EMAIL_JS_TEMPLATE_ID,
        {
          from_name: name,
          to_name: "Najiullah Khan",
          reply_to: email,
          to_email: "najiullah001@gmail.com",
          message,
        },
        EMAIL_JS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Message sent successfully!", {
            position: 'bottom-right',
          });
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          toast.error("Uh, oh! Something went wrong. Please try again later.", {
            position: 'bottom-right',
          });
        }
      );
  };

  return (
    <div className='experience bg-black w-screen text-white pt-4 pt-16 overflow-x-hidden' id='experience'>
      <div className='text-white contact overflow-x-hidden pt-12 mt-8' id='contact'>
        <div className='z-10 w-full sm:w-[650px] m-auto p-8 rounded-2xl'>
          <p className='font-light'>REACH OUT TO ME</p>
          <h2 className='text-5xl font-extrabold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-pink-500'>Contact.</h2>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8'
          >
            <label className='flex flex-col'>
              <span className='font-medium mb-4'>Your Name</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className='py-4 px-6 rounded-lg outline-none border-none font-medium bg-gray-900'
                required
              />
            </label>
            <label className='flex flex-col'>
              <span className='font-medium mb-4'>Your Email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="Ex: abc@gmail.com"
                className='py-4 px-6 rounded-lg font-medium bg-gray-900'
                required
              />
            </label>
            <label className='flex flex-col'>
              <span className='font-medium mb-4'>Your Message</span>
              <textarea
                rows={7}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='Do you have anything to say?'
                className='py-4 px-6 rounded-lg outline-none border-none font-medium bg-gray-900'
                required
              />
            </label>
            <button
  type='submit'
  className='flex items-center justify-center rounded-xl bg-gray-900 text-white font-bold shadow-md'
  style={{ minWidth: '120px', minHeight: '48px', padding: '12px 24px' }} // Adjust minWidth and minHeight as needed
>
  {loading ? "Sending..." : "Send"}
</button>

          </form>
        </div>
        <ToastContainer />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
