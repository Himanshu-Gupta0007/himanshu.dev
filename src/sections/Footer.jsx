const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-5 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-5 text-white px-5">
      
      {/* Terms & Privacy */}
      <div className="flex gap-2 text-sm md:text-base">
        <p className="hover:underline cursor-pointer transition">Terms & Conditions</p>
        <p>|</p>
        <p className="hover:underline cursor-pointer transition">Privacy Policy</p>
      </div>

      {/* Social Icons */}
      <div className="flex gap-4">
        <a href="https://github.com/Himanshu-Gupta0007" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform">
          <img src="/assets/github.svg" alt="github" className="w-8 h-8" />
        </a>

        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform">
          <img src="/assets/twitter.svg" alt="twitter" className="w-8 h-8" />
        </a>

        <a href="https://www.instagram.com/himx_uu/" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform">
          <img src="/assets/instagram.svg" alt="instagram" className="w-8 h-8" />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm md:text-base">© 2025 Himanshu. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
