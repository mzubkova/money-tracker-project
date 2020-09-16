import React from "react";
import "./header.css";

const HEADER_LIST = ["Home", "Charts", "Categories"];

// const Header = () => {
//   return (
//     <ul className="header-list">
//       <li>
//         <a href="#" onClick={""} className="header-link">
//           {HEADER_LIST.map((item) => (
//             <li>{item}</li>
//           ))}
//         </a>
//       </li>
//     </ul>
//   );
// };

const Header = () => {
  return (
      <div className="header-nav">
        {HEADER_LIST.map((item) => (
          <a href="/#" onClick={""} className="header-link">
            {item}
          </a>
        ))}
    </div>
  );
};

export default Header;
