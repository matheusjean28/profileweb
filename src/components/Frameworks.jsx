import React from "react";
import "./styles/FrameworkStyles.css";
function Frameworks() {
  return (
    <>
      <div className="stackConteiner">
        <h2> TECNOLOGIAS</h2>
        <ul>
          <li className="StackLiStyle ">
            <img className="rotate" src="./src/icons/atom.png" alt="" />
            <p>ReactJs</p>
          </li>
          <li className="StackLiStyle">
            <img src="./src/icons/js-file.png" alt="" />
            <p>JavaScript</p>
          </li>
          <li className="StackLiStyle">
            <img src="./src/icons/mysql.png" alt="" />
            <p>MySQL</p>
          </li>
          <li className="StackLiStyle ">
            <img  src="./src/icons/csharp.png" alt="" />
            <p>C-Shap</p>
          </li>
          <li className="StackLiStyle">
          <img  src="./src/icons/nodejss.png" alt="" />
            <p>teste</p>
          </li>
          <li className="StackLiStyle">
            <p>teste</p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Frameworks;
