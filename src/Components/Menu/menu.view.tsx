import { Outlet } from "react-router-dom";
import "./menu.style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCircleQuestion,
  faHandHoldingHeart,
  faHeart,
  faHome,
  faListUl,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";

interface IMenuView {
  onClickCollapsed: () => void;
  isCollapsed: boolean;
}

const View: FC<IMenuView> = ({ onClickCollapsed, isCollapsed }) => (
  <div className="root-wrapper">
    <div className={`menu-principal ${isCollapsed ? "menu-principal-fechado" : ""}`}>
      <header className={`menu-cabecalho ${isCollapsed ? "menu-cabecalho-fechado" : ""}`}>
        <FontAwesomeIcon icon={faBars} onClick={onClickCollapsed} className="menu-hamburguer" />
        <img
          className={`imagem-logo ${isCollapsed ? "imagem-logo-fechado" : ""}`}
          src="/image/logo-dark.png"
          alt="Logo do GENerate"
        />
      </header>
      <nav className="menu-navegacao">
        <ul className="menu-lista">
          <li className={`menu-itens ${isCollapsed ? "menu-itens-fechado" : ""}`}>
            <FontAwesomeIcon
              icon={faHome}
              className={`menu-links-icones ${isCollapsed ? "menu-links-icones-fechado" : ""}`}
            />
            <a className={`menu-links ${isCollapsed ? "menu-links-fechado" : ""}`} href="#">
              Início
            </a>
          </li>
          <li className={`menu-itens ${isCollapsed ? "menu-itens-fechado" : ""}`}>
            <FontAwesomeIcon
              icon={faSearch}
              className={`menu-links-icones ${isCollapsed ? "menu-links-icones-fechado" : ""}`}
            />
            <a className={`menu-links ${isCollapsed ? "menu-links-fechado" : ""}`} href="#">
              Pesquisar
            </a>
          </li>
          <li className={`menu-itens ${isCollapsed ? "menu-itens-fechado" : ""}`}>
            <FontAwesomeIcon
              icon={faHeart}
              className={`menu-links-icones ${isCollapsed ? "menu-links-icones-fechado" : ""}`}
            />
            <a className={`menu-links ${isCollapsed ? "menu-links-fechado" : ""}`} href="#">
              Favoritos
            </a>
          </li>
          <li className={`menu-itens ${isCollapsed ? "menu-itens-fechado" : ""}`}>
            <FontAwesomeIcon
              icon={faListUl}
              className={`menu-links-icones ${isCollapsed ? "menu-links-icones-fechado" : ""}`}
            />
            <a className={`menu-links ${isCollapsed ? "menu-links-fechado" : ""}`} href="#">
              Playlist
            </a>
          </li>
          <li className={`menu-itens ${isCollapsed ? "menu-itens-fechado" : ""}`}>
            <FontAwesomeIcon
              icon={faCircleQuestion}
              className={`menu-links-icones ${isCollapsed ? "menu-links-icones-fechado" : ""}`}
            />
            <a className={`menu-links ${isCollapsed ? "menu-links-fechado" : ""}`} href="#">
              Sobre GENerate
            </a>
          </li>
          <li className={`menu-itens ${isCollapsed ? "menu-itens-fechado" : ""}`}>
            <FontAwesomeIcon
              icon={faHandHoldingHeart}
              className={`menu-links-icones ${isCollapsed ? "menu-links-icones-fechado" : ""}`}
            />
            <a className={`menu-links ${isCollapsed ? "menu-links-fechado" : ""}`} href="#">
              Doações
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div className={`conteudo ${isCollapsed ? "conteudo-fechado" : ""}`}>
      <Outlet />
    </div>
  </div>
);

export default View;
