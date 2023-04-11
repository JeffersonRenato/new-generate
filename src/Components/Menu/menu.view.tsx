import styles from "./menu.module.scss";

const View = () => (
  <nav className={styles.menuPrincipal}>
    <a className={styles.botaoLogoHome} href="#">
      <img
        className={styles.imagemLogo}
        src="https://generate.focolare.org/wp-content/themes/genapp/assets/images/logo-dark.png"
      />
    </a>
    <ul className={styles.menuLista}>
      <li className={styles.menuItens}>
        <a className={styles.menuLinks} href="#">
          Home
        </a>
      </li>
      <li className={styles.menuItens}>
        <a className={styles.menuLinks} href="#">
          Pesquisar
        </a>
      </li>
      <li className={styles.menuItens}>
        <a className={styles.menuLinks} href="#">
          Favoritos
        </a>
      </li>
      <li className={styles.menuItens}>
        <a className={styles.menuLinks} href="#">
          Playlist
        </a>
      </li>
      <li className={styles.menuItens}>
        <a className={styles.menuLinks} href="#">
          Sobre GENerate
        </a>
      </li>
      <li className={styles.menuItens}>
        <a className={styles.menuLinks} href="#">
          Doações
        </a>
      </li>
    </ul>
  </nav>
);

export default View;
