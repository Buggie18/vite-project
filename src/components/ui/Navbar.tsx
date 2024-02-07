// // Navbar.js
// import React from 'react';

// function Navbar() {
//   return (
//     <nav className="bg-sky-900">
//       <div className="container mx-auto flex justify-between items-center bg-sky-900">
//         <div>
//           <a href="#" className="text-white font-bold text-lg">Logo</a>
//         </div>
//         <ul className="flex space-x-4">
//           <li><a href="#" className="text-white hover:text-gray-400 px-2">Home</a></li>
//           <li><a href="#" className="text-white hover:text-gray-400 px-2">Features</a></li>
//           <li><a href="#" className="text-white hover:text-gray-400 px-2">About Us</a></li>
//           <li><a href="#" className="text-white hover:text-gray-400 px-2">Achievements</a></li>
//           <li><a href="#" className="text-white hover:text-gray-400 px-2">FAQs</a></li>
//           <li><a href="#" className="text-white hover:text-gray-400 px-2">Contact Us</a></li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-900 p-2 m-0 self-stretch">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">My Website</div>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-white hover:text-gray-300">Home</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">About</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">Services</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

