import { FC } from "react";
import { Outlet, Link } from "react-router-dom";
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
import "./menu.style.scss";

interface IMenuView {
  onClickCollapsed: () => void;
  isCollapsed: boolean;
}

const View: FC<IMenuView> = ({ onClickCollapsed, isCollapsed }) => (
  <div className="root-wrapper">
    <div className={`menu-principal ${isCollapsed ? "menu-principal-fechado" : ""}`}>
      <header className="menu-cabecalho">
        <div className="menu-cabecalho-icone-area">
          <FontAwesomeIcon icon={faBars} onClick={onClickCollapsed} className="menu-hamburguer" />
        </div>
        <img
          className={`imagem-logo ${isCollapsed ? "imagem-logo-fechado" : ""}`}
          src="/image/logo-dark.png"
          alt="Logo do GENerate"
        />
      </header>
      <nav className="menu-navegacao">
        <ul className="menu-lista">
          <Link to={`/home`} className="router-dom-links">
            <li className="menu-itens">
              <div className="menu-links-icones-area">
                <FontAwesomeIcon
                  icon={faHome}
                  className={`menu-links-icones ${isCollapsed ? "menu-links-icones-fechado" : ""}`}
                />
              </div>
              <div className={`menu-links ${isCollapsed ? "menu-links-fechado" : ""}`}>Início</div>
            </li>
          </Link>
          <Link to={`/pesquisar`} className="router-dom-links">
            <li className="menu-itens">
              <div className="menu-links-icones-area">
                <FontAwesomeIcon
                  icon={faSearch}
                  className={`menu-links-icones ${isCollapsed ? "menu-links-icones-fechado" : ""}`}
                />
              </div>
              <div className={`menu-links ${isCollapsed ? "menu-links-fechado" : ""}`}>Pesquisar</div>
            </li>
          </Link>
          <Link to={`/favoritos`} className="router-dom-links">
            <li className="menu-itens">
              <div className="menu-links-icones-area">
                <FontAwesomeIcon
                  icon={faHeart}
                  className={`menu-links-icones ${isCollapsed ? "menu-links-icones-fechado" : ""}`}
                />
              </div>
              <div className={`menu-links ${isCollapsed ? "menu-links-fechado" : ""}`}>Favoritos</div>
            </li>
          </Link>
          <Link to={`/playlist`} className="router-dom-links">
            <li className="menu-itens">
              <div className="menu-links-icones-area">
                <FontAwesomeIcon
                  icon={faListUl}
                  className={`menu-links-icones ${isCollapsed ? "menu-links-icones-fechado" : ""}`}
                />
              </div>
              <div className={`menu-links ${isCollapsed ? "menu-links-fechado" : ""}`}>Playlist</div>
            </li>
          </Link>
          <Link to={`/sobre`} className="router-dom-links">
            <li className="menu-itens">
              <div className="menu-links-icones-area">
                <FontAwesomeIcon
                  icon={faCircleQuestion}
                  className={`menu-links-icones ${isCollapsed ? "menu-links-icones-fechado" : ""}`}
                />
              </div>
              <div className={`menu-links ${isCollapsed ? "menu-links-fechado" : ""}`}>Sobre GENerate</div>
            </li>
          </Link>
          <Link to={`/doacoes`} className="router-dom-links">
            <li className="menu-itens">
              <div className="menu-links-icones-area">
                <FontAwesomeIcon
                  icon={faHandHoldingHeart}
                  className={`menu-links-icones ${isCollapsed ? "menu-links-icones-fechado" : ""}`}
                />
              </div>
              <div className={`menu-links ${isCollapsed ? "menu-links-fechado" : ""}`}>Doações</div>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
    <div className={`conteudo ${isCollapsed ? "conteudo-fechado" : ""}`}>
      <Outlet />
    </div>
  </div>
);

export default View;
