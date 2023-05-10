import "./card.style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faVideo } from "@fortawesome/free-solid-svg-icons";

const View = () => (
  <div className="card-area-total">
    <div className="card-area-imagem">
      <img className="card-imagem-principal" src="/image/imagem-card-teste.png" alt="Imagem do card" />
      <FontAwesomeIcon icon={faHeart} className="card-icone-favorito" />
    </div>
    <div className="card-area-descricao">
      <h3 className="card-autor">Karram Margaret</h3>
      <p className="card-titulo">Interior life and prayer - Margaret Karram</p>
      <p className="card-duracao">Duração: 32 min</p>
    </div>
    <div className="card-area-midia-descricao">
      <FontAwesomeIcon icon={faVideo} className="card-icone-midia" />
      <p className="card-midia-tipo">Vídeo</p>
    </div>
  </div>
);

export default View;
