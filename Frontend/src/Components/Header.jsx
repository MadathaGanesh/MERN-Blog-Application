// import { NavLink } from "react-router-dom";

// const Header = () => {
//   return (
//     <header className="bg-gray-800 text-white h-8 w-full flex justify-around">
//       <nav className="text-2xl ">
//         <NavLink to="/">Home</NavLink>
//         <div className="text-xl font-semibold">
//           <NavLink to="/Blog">Blog</NavLink>
//           <NavLink to="/Create" className="text-gray-700">
//             Create Blog
//           </NavLink>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white h-16 w-full flex justify-around items-center shadow-lg">
      <nav className="flex space-x-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-500 font-bold text-2xl"
              : "text-white hover:text-yellow-300 text-2xl transition-colors duration-200"
          }
        >
          Home
        </NavLink>
        <div className="flex space-x-6 text-xl font-semibold">
          <NavLink
            to="/Blog"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-500"
                : "text-white hover:text-yellow-300 transition-colors duration-200"
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/Create"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-500"
                : "text-white hover:text-yellow-300 transition-colors duration-200"
            }
          >
            Create Blog
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
