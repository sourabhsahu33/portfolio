// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { IoLogoGithub } from "react-icons/io";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaMedium } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import ContactWithCaptcha from './contact-with-captcha';
import ContactWithoutCaptcha from './contact-without-captcha';

function ContactSection() {
  return (
    <section id="contact" className="my-16">
      <div className="sec-divider"></div>

      <div className="section-title">
        <span className="num">06.</span>
        <h2>Contact</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left - Info */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-[0.65rem] tracking-[0.2em] uppercase text-[#00e5a0] mb-5">{'// let\'s talk'}</p>
            <p className="text-[0.8rem] leading-[1.8] text-[#555566]">
              I&apos;m open to full-time roles, freelance gigs, or just a chat about something interesting you&apos;re building. My inbox is always open.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 text-[0.78rem] text-[#c8cad8] group">
              <span className="w-[34px] h-[34px] border border-[#222228] rounded-md flex items-center justify-center text-[#00e5a0] text-[0.8rem] shrink-0 transition-all duration-200 group-hover:bg-[rgba(0,229,160,0.08)] group-hover:border-[#00e5a0]">
                <i className="fas fa-envelope"></i>
              </span>
              <span>{personalData.email}</span>
            </div>
            <div className="flex items-center gap-4 text-[0.78rem] text-[#c8cad8] group">
              <span className="w-[34px] h-[34px] border border-[#222228] rounded-md flex items-center justify-center text-[#00e5a0] text-[0.8rem] shrink-0 transition-all duration-200 group-hover:bg-[rgba(0,229,160,0.08)] group-hover:border-[#00e5a0]">
                <i className="fas fa-phone"></i>
              </span>
              <span>{personalData.phone}</span>
            </div>
            <div className="flex items-center gap-4 text-[0.78rem] text-[#c8cad8] group">
              <span className="w-[34px] h-[34px] border border-[#222228] rounded-md flex items-center justify-center text-[#00e5a0] text-[0.8rem] shrink-0 transition-all duration-200 group-hover:bg-[rgba(0,229,160,0.08)] group-hover:border-[#00e5a0]">
                <i className="fas fa-location-dot"></i>
              </span>
              <span>{personalData.address}</span>
            </div>
          </div>

          <div className="flex gap-2.5 mt-2">
            {[
              { href: personalData.github, icon: <IoLogoGithub size={18} /> },
              { href: personalData.linkedIn, icon: <BiLogoLinkedin size={18} /> },
              { href: personalData.twitter, icon: <FaXTwitter size={18} /> },
              { href: personalData.medium, icon: <FaMedium size={18} /> },
            ].map((social, i) => (
              <Link
                key={i}
                target="_blank"
                href={social.href}
                className="w-[38px] h-[38px] border border-[#222228] rounded-md flex items-center justify-center text-[#555566] transition-all duration-200 hover:border-[#00e5a0] hover:text-[#00e5a0] hover:bg-[rgba(0,229,160,0.06)] hover:-translate-y-0.5"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Right - Form */}
        <div>
          {
            (process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY)
              ? <ContactWithCaptcha />
              : <ContactWithoutCaptcha />
          }
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
