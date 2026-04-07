// @flow strict
import Link from 'next/link';

function Footer() {
  return (
    <footer className="border-t border-[#222228] mt-16 relative" style={{ zIndex: 1 }}>
      <div className="max-w-[1100px] mx-auto px-8 py-8 flex items-center justify-between text-[0.72rem] text-[#555566] flex-col sm:flex-row gap-2 text-center sm:text-left">
        <span>
          built by{' '}
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/sourabhsahu33/"
            className="text-[#00e5a0] hover:underline"
          >
            Sourabh Sahu
          </Link>
        </span>
        <span className="text-[#333340]">{'// designed & coded from scratch'}</span>
      </div>
    </footer>
  );
}

export default Footer;
