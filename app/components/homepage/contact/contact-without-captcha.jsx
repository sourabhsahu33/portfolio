"use client";
// @flow strict
import { isValidEmail } from '@/utils/check-email';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { TbMailForward } from "react-icons/tb";
import { toast } from 'react-toastify';

function ContactWithoutCaptcha() {
  const [input, setInput] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [error, setError] = useState({
    email: false,
    required: false,
  });

  const checkRequired = () => {
    if (input.email && input.message && input.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();
    if (!input.email || !input.message || !input.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    }

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const options = { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY };

    try {
      const res = await emailjs.send(serviceID, templateID, input, options);

      if (res.status === 200) {
        toast.success('Message sent successfully!');
        setInput({ name: '', email: '', message: '' });
      }
    } catch (error) {
      toast.error(error?.text || error);
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-[0.65rem] tracking-[0.1em] uppercase text-[#555566]">your name</label>
          <input
            className="w-full bg-[#111114] border border-[#222228] rounded px-3.5 py-2.5 text-[#eeeef4] text-[0.78rem] outline-none transition-colors duration-200 focus:border-[#00e5a0] focus:shadow-[0_0_0_3px_rgba(0,229,160,0.06)] font-mono"
            type="text"
            maxLength="100"
            placeholder="John Doe"
            required={true}
            onChange={(e) => setInput({ ...input, name: e.target.value })}
            onBlur={checkRequired}
            value={input.name}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[0.65rem] tracking-[0.1em] uppercase text-[#555566]">your email</label>
          <input
            className="w-full bg-[#111114] border border-[#222228] rounded px-3.5 py-2.5 text-[#eeeef4] text-[0.78rem] outline-none transition-colors duration-200 focus:border-[#00e5a0] focus:shadow-[0_0_0_3px_rgba(0,229,160,0.06)] font-mono"
            type="email"
            maxLength="100"
            placeholder="john@example.com"
            required={true}
            value={input.email}
            onChange={(e) => setInput({ ...input, email: e.target.value })}
            onBlur={() => {
              checkRequired();
              setError({ ...error, email: !isValidEmail(input.email) });
            }}
          />
          {error.email && <p className="text-[0.68rem] text-[#ff6b6b] mt-1">Please provide a valid email!</p>}
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[0.65rem] tracking-[0.1em] uppercase text-[#555566]">message</label>
          <textarea
            className="w-full bg-[#111114] border border-[#222228] rounded px-3.5 py-2.5 text-[#eeeef4] text-[0.78rem] outline-none transition-colors duration-200 focus:border-[#00e5a0] focus:shadow-[0_0_0_3px_rgba(0,229,160,0.06)] resize-y font-mono"
            maxLength="500"
            name="message"
            placeholder="Hey Sourabh, I wanted to..."
            required={true}
            onChange={(e) => setInput({ ...input, message: e.target.value })}
            onBlur={checkRequired}
            rows="5"
            value={input.message}
          />
        </div>

        <div className="flex flex-col items-start gap-2">
          {error.required && <p className="text-[0.68rem] text-[#ff6b6b]">All fields are required!</p>}
          <button
            className="flex items-center gap-2 text-[0.72rem] tracking-[0.1em] uppercase bg-[#00e5a0] text-[#0c0c0e] border-none px-8 py-2.5 rounded cursor-pointer transition-all duration-200 hover:bg-[#00ffb3] hover:shadow-[0_0_20px_rgba(0,229,160,0.3)] font-mono"
            role="button"
            onClick={handleSendMail}
          >
            <span>send message</span>
            <TbMailForward className="mt-0.5" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactWithoutCaptcha;
