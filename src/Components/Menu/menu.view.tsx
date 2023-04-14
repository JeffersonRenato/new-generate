import { Outlet } from "react-router-dom";
import "./menu.style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faHandHoldingHeart,
  faHeart,
  faHome,
  faListUl,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const View = () => (
  <div className="root-wrapper">
    <div className="menu-principal">
      <header className="menu-cabecalho">
        <img
          className="imagem-logo"
          src="/image/logo-dark.png"
          alt="Logo do GENerate"
        />
      </header>
      <nav className="menu-navegacao">
        <ul className="menu-lista">
          <li className="menu-itens">
            <FontAwesomeIcon icon={faHome} className="menu-links-icones" />
            <a className="menu-links" href="#">
              Home
            </a>
          </li>
          <li className="menu-itens">
            <FontAwesomeIcon icon={faSearch} className="menu-links-icones" />
            <a className="menu-links" href="#">
              Pesquisar
            </a>
          </li>
          <li className="menu-itens">
            <FontAwesomeIcon icon={faHeart} className="menu-links-icones" />
            <a className="menu-links" href="#">
              Favoritos
            </a>
          </li>
          <li className="menu-itens">
            <FontAwesomeIcon icon={faListUl} className="menu-links-icones" />
            <a className="menu-links" href="#">
              Playlist
            </a>
          </li>
          <li className="menu-itens">
            <FontAwesomeIcon
              icon={faCircleQuestion}
              className="menu-links-icones"
            />
            <a className="menu-links" href="#">
              Sobre GENerate
            </a>
          </li>
          <li className="menu-itens">
            <FontAwesomeIcon
              icon={faHandHoldingHeart}
              className="menu-links-icones"
            />
            <a className="menu-links" href="#">
              Doações
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div className="conteudo">
      <Outlet />
    </div>
  </div>
);

export default View;
