import React from "react";

export default function Social() {
  return (
    <ul className="flex px-3 flex-col z-50 gap-5 items-center md:order-3 sm:mt-0">
      <li>
        <a
          href=""
          title=""
          target="_blank"
          className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-blue-600 hover:text-white focus:text-white hover:bg-blue-600 hover:border-blue-600 focus:border-blue-600"
        >
          <img src="/xlogo.png" className="w-4 h-4" />
        </a>
      </li>

      <li>
        <a
          href=""
          title=""
          target="_blank"
          className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-blue-600 hover:text-white focus:text-white hover:bg-blue-600 hover:border-blue-600 focus:border-blue-600"
        >
          <img
            className="w-4 h-4"
            src="https://img.icons8.com/ios-filled/36/FFFFFF/telegram-app.png"
          />
        </a>
      </li>
      <li>
        <a
          href=""
          title=""
          target="_blank"
          className="flex justify-center z-50 items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-blue-600 hover:text-white focus:text-white hover:bg-blue-600 hover:border-blue-600  focus:border-blue-600"
        >
          <img
            className="w-4 h-4"
            src="https://img.icons8.com/ios-glyphs/30/FFFFFF/linkedin.png"
          />
        </a>
      </li>
      <li>
        <a
          href=""
          title=""
          target="_blank"
          className="flex justify-center z-50 items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-blue-600 hover:text-white focus:text-white hover:bg-blue-600 hover:border-blue-600  focus:border-blue-600"
        >
          <img
            className="w-4 h-4"
            src="https://img.icons8.com/material-outlined/24/FFFFFF/github.png"
          />
        </a>
      </li>
    </ul>
  );
}
