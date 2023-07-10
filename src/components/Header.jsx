import React from "react";
import "./styles/headerStyles.css";
function Header() {
  return (
    <>
      <ul className="headerStyle">
        <li className="LiStyle">Sobre Mim</li>
        <li className="LiStyle">Projetos</li>
        <li className="LiStyle">Ferramentas</li>
        <li className="LiStyle">Me Encontre</li>
        <li className="LiStyle  LiStyleBtn">
          <button>Email</button>
        </li>
      </ul>
    </>
  );
}

export default Header;
