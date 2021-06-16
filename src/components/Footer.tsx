import React from "react";


export const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-6 p-6  text-sm sm:text-base grid grid-cols-2 md:grid-cols-3">
        <ul>
            <li className="text-xs sm:text-base"><a className="underline text-blue-500 font-bold" href="/our-team">Our Team</a></li>
            <li><a className="underline text-blue-500 font-bold" href="/courses">Courses</a></li>
            <li><a className="underline text-blue-500 font-bold" href="/our-sponsors">Sponsors</a></li>
        </ul>

        <ul>
            <li><a className="underline text-blue-500 font-bold " href="/logos.zip">Download</a> our logos. Logos must be accredited when used. The Edumango website must be linked or mentioned and viewable when logos are used.</li>
            
        </ul>

        
    </footer>
  );
};
