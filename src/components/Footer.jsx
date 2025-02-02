


const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          ©Baked Media 2025. All rights reserved
        </p>
        <div className="text-center md:text-left">
  <p className="text-sm font-light">Website Crafted By</p>
  <a 
    href="https://raghavkrishnaportfolio.vercel.app/"
    className="inline-block mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
    target="_blank"
    rel="noopener noreferrer"
  >
    Raghav.
  </a>
</div> 
        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
