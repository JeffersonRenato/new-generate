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
        <Link to={"/home"} draggable={false}>
          <img
            className="menu-logo-image"
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
                <FontAwesomeIcon icon={faHome} className="menu-links-icons" />
              </div>
              <div className="menu-links">Início</div>
            </li>
          </Link>
          <Link to={"/search"} className="menu-router-dom-links" draggable="false">
            <li className="menu-items">
              <div className="menu-links-icons-wrapper">
                <FontAwesomeIcon icon={faSearch} className="menu-links-icons" />
              </div>
              <div className="menu-links">Pesquisar</div>
            </li>
          </Link>
          <Link to={"/favorites"} className="menu-router-dom-links" draggable="false">
            <li className="menu-items">
              <div className="menu-links-icons-wrapper">
                <FontAwesomeIcon icon={faHeart} className="menu-links-icons" />
              </div>
              <div className="menu-links">Favoritos</div>
            </li>
          </Link>
          <Link to={"/playlist"} className="menu-router-dom-links" draggable="false">
            <li className="menu-items">
              <div className="menu-links-icons-wrapper">
                <FontAwesomeIcon icon={faListUl} className="menu-links-icons" />
              </div>
              <div className="menu-links">Playlist</div>
            </li>
          </Link>
          <Link to={"/about"} className="menu-router-dom-links" draggable="false">
            <li className="menu-items">
              <div className="menu-links-icons-wrapper">
                <FontAwesomeIcon icon={faCircleQuestion} className="menu-links-icons" />
              </div>
              <div className="menu-links">Sobre GENerate</div>
            </li>
          </Link>
          <Link to={"/donate"} className="menu-router-dom-links" draggable="false">
            <li className="menu-items">
              <div className="menu-links-icons-wrapper">
                <FontAwesomeIcon icon={faHandHoldingHeart} className="menu-links-icons" />
              </div>
              <div className="menu-links">Doações</div>
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
          className="menu-footer-link"
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
