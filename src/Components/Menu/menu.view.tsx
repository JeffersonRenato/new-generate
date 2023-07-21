import { FC } from "react";
import { Outlet, Link } from "react-router-dom";
import { MenuWrapper } from "./menu.style";
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

interface IMenuView {
  onClickCollapsed: () => void;
  isCollapsed: boolean;
  onClick: () => void;
  theme: string;
}

const View: FC<IMenuView> = ({ onClickCollapsed, isCollapsed, onClick, theme }) => (
  <MenuWrapper theme={theme}>
    <div className={`menu ${isCollapsed ? "menu-collapsed" : ""}`}>
    <button onClick={onClick}>tema</button>
      <header className="menu-header">
        <div className="menu-header-icon">
          <FontAwesomeIcon icon={faBars} onClick={onClickCollapsed} className="menu-hamburguer-icon" />
        </div>
        <img
          className={`menu-logo-image ${isCollapsed ? "menu-logo-image-collapsed" : ""}`}
          src="/image/logo-dark.png"
          alt="Logo do GENerate"
        />
      </header>
      <nav className="menu-navigation">
        <ul className="menu-list">
          <Link to={`/home`} className="menu-router-dom-links">
            <li className="menu-items">
              <div className="menu-links-icons-wrapper">
                <FontAwesomeIcon
                  icon={faHome}
                  className={`menu-links-icons ${isCollapsed ? "menu-links-icons-collapsed" : ""}`}
                />
              </div>
              <div className={`menu-links ${isCollapsed ? "menu-links-collapsed" : ""}`}>Início</div>
            </li>
          </Link>
          <Link to={`/pesquisar`} className="menu-router-dom-links">
            <li className="menu-items">
              <div className="menu-links-icons-wrapper">
                <FontAwesomeIcon
                  icon={faSearch}
                  className={`menu-links-icons ${isCollapsed ? "menu-links-icons-collapsed" : ""}`}
                />
              </div>
              <div className={`menu-links ${isCollapsed ? "menu-links-collapsed" : ""}`}>Pesquisar</div>
            </li>
          </Link>
          <Link to={`/favoritos`} className="menu-router-dom-links">
            <li className="menu-items">
              <div className="menu-links-icons-wrapper">
                <FontAwesomeIcon
                  icon={faHeart}
                  className={`menu-links-icons ${isCollapsed ? "menu-links-icons-collapsed" : ""}`}
                />
              </div>
              <div className={`menu-links ${isCollapsed ? "menu-links-collapsed" : ""}`}>Favoritos</div>
            </li>
          </Link>
          <Link to={`/playlist`} className="menu-router-dom-links">
            <li className="menu-items">
              <div className="menu-links-icons-wrapper">
                <FontAwesomeIcon
                  icon={faListUl}
                  className={`menu-links-icons ${isCollapsed ? "menu-links-icons-collapsed" : ""}`}
                />
              </div>
              <div className={`menu-links ${isCollapsed ? "menu-links-collapsed" : ""}`}>Playlist</div>
            </li>
          </Link>
          <Link to={`/sobre`} className="menu-router-dom-links">
            <li className="menu-items">
              <div className="menu-links-icons-wrapper">
                <FontAwesomeIcon
                  icon={faCircleQuestion}
                  className={`menu-links-icons ${isCollapsed ? "menu-links-icons-collapsed" : ""}`}
                />
              </div>
              <div className={`menu-links ${isCollapsed ? "menu-links-collapsed" : ""}`}>Sobre GENerate</div>
            </li>
          </Link>
          <Link to={`/doacoes`} className="menu-router-dom-links">
            <li className="menu-items">
              <div className="menu-links-icons-wrapper">
                <FontAwesomeIcon
                  icon={faHandHoldingHeart}
                  className={`menu-links-icons ${isCollapsed ? "menu-links-icons-collapsed" : ""}`}
                />
              </div>
              <div className={`menu-links ${isCollapsed ? "menu-links-collapsed" : ""}`}>Doações</div>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
    <div className={`content ${isCollapsed ? "content-collapsed" : ""}`}>
      <Outlet />
    </div>
  </MenuWrapper>
);

export default View;
