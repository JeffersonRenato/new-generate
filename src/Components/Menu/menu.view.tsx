import styles from "./menu.module.scss";

const View = () => (
  <div className={styles.menu}>
    <div className={styles.lista}>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Pesquisar</a>
        </li>
        <li>
          <a href="#">Favoritos</a>
        </li>
        <li>
          <a href="#">Playlist</a>
        </li>
        <li>
          <a href="#">Sobre GENerate</a>
        </li>
        <li>
          <a href="#">Doe</a>
        </li>
      </ul>
    </div>
  </div>
);

export default View;
