// import React, { useState } from "react";

// // 어떻게 구현?
// const NavBar = () => {
//   const [openMenu, setOpenMenu] = useState(null);

//   const handleMouseEnter = (menu) => {
//     setOpenMenu(menu);
//   };

//   const handleMouseLeave = () => {
//     setOpenMenu(null);
//   };

//   return (
//     <nav className="p-4 bg-brown-600">
//       <ul className="flex space-x-4 text-white">
//         <li
//           className="relative group"
//           onMouseEnter={() => handleMouseEnter("company")}
//           onMouseLeave={handleMouseLeave}
//         >
//           <a href="#" className="flex items-center">
//             <span className="mr-2">🏠</span> 회사소개
//           </a>
//           {openMenu === "company" && (
//             <ul className="absolute w-40 p-2 mt-2 text-black bg-white shadow-lg">
//               <li className="p-2 hover:bg-gray-200">회사 연혁</li>
//               <li className="p-2 hover:bg-gray-200">비전</li>
//             </ul>
//           )}
//         </li>
//         <li
//           className="relative group"
//           onMouseEnter={() => handleMouseEnter("organization")}
//           onMouseLeave={handleMouseLeave}
//         >
//           <a href="#" className="text-white">
//             조직도
//           </a>
//           {openMenu === "organization" && (
//             <ul className="absolute w-40 p-2 mt-2 text-black bg-white shadow-lg">
//               <li className="p-2 hover:bg-gray-200">임원 소개</li>
//               <li className="p-2 hover:bg-gray-200">부서 안내</li>
//             </ul>
//           )}
//         </li>
//       </ul>
//     </nav>
//   );
// };
