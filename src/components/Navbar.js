import React from "react";

export const Navbar = ({ children }) => (
  <header className="h-20">
    <h2 className="text-gray-800 capitalize text-5xl md:text-6xl font-sans font-semibold tracking-wide text-center">
      {children}
    </h2>
  </header>
);
