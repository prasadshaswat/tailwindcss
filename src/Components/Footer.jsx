import React from 'react';

const Footer = () => {
  return (
    <div className="flex flex-col gap-12 md:flex-row md:justify-between py-6">
      <ul className="flex gap-6 font-lato text-gray-400">
        <li>
          <a href="#">Facebook</a>
        </li>
        <li>
          <a href="#">Instagram</a>
        </li>
        <li>
          <a href="#">Twitter</a>
        </li>
      </ul>
      <div className="flex gap-2 items-center">
        <img src="\public\assets\Help-Avatar.svg" alt="Help Avatar" />
        <div>
          <p className="font-playfair font-thin">Have you any question?</p>
          <a href="#" className="font-lato font-medium">Talk to a specialist</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
