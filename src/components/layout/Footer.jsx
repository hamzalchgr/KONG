const Footer = () => {
  return (
    <footer className="px-4 pt-4 md:px-10 pb-16 md:py-5 text-gray-8b text-sm leading-5">
      <p className="py-1">
        © 2026 Jason Ujma-Alvis. All rights reserved. Cookie Policy.
      </p>
      <p className="py-1">Designed and built by me, data provided by TMDb.</p>

      <div className="flex gap-0 text-2xl text-gray-8b pt-5">
        <a href="#" className="h-11 w-11 flex-center">
          <i className="ri-twitter-fill"></i>
        </a>
        <a href="#" className="h-11 w-11 flex-center">
          <i className="ri-linkedin-box-fill"></i>
        </a>
        <a href="#" className="h-11 w-11 flex-center">
          <i className="ri-twitch-fill"></i>
        </a>
        <a href="#" className="h-11 w-11 flex-center">
          <i className="ri-mail-line"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
