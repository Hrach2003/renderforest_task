export const Banner = ({ children, classes }) => (
  <div
    className={`
      z-10 relative mx-auto h-12 
      w-10/12 -mt-6 text-white text-2xl 
      font-sans italic font-semibold rounded-xl
      flex items-center justify-center 
      shadow-3xl ${classes}`}
  >
    {children}
  </div>
);
