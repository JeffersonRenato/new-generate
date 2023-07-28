import { FC } from "react";
import { Outlet, Link, ScrollRestoration } from "react-router-dom";
import languageOptions from "./constants/languages";
import { MenuWrapper } from "./menu.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCircleHalfStroke,
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
  onClickTheme: () => void;
  theme: string;
  onChangeLanguage: React.ChangeEventHandler<HTMLSelectElement>;
}

const View: FC<IMenuView> = ({ onClickCollapsed, isCollapsed, onClickTheme, theme, onChangeLanguage }) => (
  <MenuWrapper theme={theme}>
    <div className={`menu ${isCollapsed ? "menu-collapsed" : ""}`}>
      <header className="menu-header">
        <div className="menu-header-icon">
          <FontAwesomeIcon icon={faBars} onClick={onClickCollapsed} className="menu-hamburguer-icon" />
        </div>
        <Link to={"/home"}>
          <img
            className={`menu-logo-image ${isCollapsed ? "menu-logo-image-collapsed" : ""}`}
            src={theme === "dark" ? "/image/logo-dark.png" : "/image/logo-light.png"}
            alt="Logo do GENerate"
            draggable="false"
          />
        </Link>
      </header>
      <nav className="menu-navigation">
        <ul className="menu-list">
          <Link to={"/home"} className="menu-router-dom-links" draggable="false">
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
          <Link to={"/pesquisar"} className="menu-router-dom-links" draggable="false">
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
          <Link to={"/favoritos"} className="menu-router-dom-links" draggable="false">
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
          <Link to={"/playlist"} className="menu-router-dom-links" draggable="false">
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
          <Link to={"/sobre"} className="menu-router-dom-links" draggable="false">
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
          <Link to={"/doacoes"} className="menu-router-dom-links" draggable="false">
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
      <div className="menu-select-language-wrapper">
        <select onChange={onChangeLanguage} className="menu-select-language">
          {languageOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="menu-footer-wrapper">
        <div className="menu-theme-toogle-wrapper">
          <FontAwesomeIcon
            icon={faCircleHalfStroke}
            rotation={theme === "dark" ? undefined : 180}
            onClick={onClickTheme}
            className="menu-theme-toogle"
          />
        </div>
        <a
          className={`menu-footer-link ${isCollapsed ? "menu-footer-link-collapsed" : ""}`}
          href="https://generate.focolare.org/pt-pt/"
          target="_blank"
          rel="noreferrer"
          draggable="false"
        >
          Baseado em GENerate
        </a>
      </div>
    </div>
    <div className={`content ${isCollapsed ? "content-collapsed" : ""}`}>
      <Outlet />
      <ScrollRestoration />
    </div>
  </MenuWrapper>
);

export default View;
