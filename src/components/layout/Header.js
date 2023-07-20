import "./Header.css";

import logoSrc from "../../icons/logo.svg"; //é mais fácil de perceber se o path está correcto. Antes esta a dar erro, mas era porque ele não conseguia ir buscar o logo dentro da pasta public. tive de mudar para dentro da pasta da src

function Header() {
  return (
    <div className="pt-4 pb-2 bg-white header">
      <div className="justify-content-center">
        <img src={logoSrc} alt="logo" className="logoSvg" />
      </div>
      <div className="text-center mt-2">
        <h1 className="logoTxt">Baby Namer</h1>
      </div>
    </div>
  );
}

export default Header;
