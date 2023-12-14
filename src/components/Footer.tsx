import React from "react";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "react-feather";

export const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="flex justify-center items-center mb-5 space-x-4">
        <Facebook />
        <Twitter />
        <Instagram />
        <Youtube />
        <Linkedin />
      </div>
      <span className="block">© Job Portal by Hossanadev 2023</span>
    </div>
  );
};
