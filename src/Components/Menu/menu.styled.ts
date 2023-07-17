import styled from "styled-components";

export const MenuWrapper = styled.div`
  display: flex;

  .menu-principal {
    width: 200px;
    height: 100%;
    padding: 0 15px;
    position: fixed;
    z-index: 9;
    background: #222;
    overflow: hidden;
    transition: 0.5s;

    .menu-cabecalho {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-top: 10px;
    }

    .menu-cabecalho-icone-area {
      width: 14px;
      display: flex;
      justify-content: center;
    }

    .menu-hamburguer {
      color: #fff;
    }

    .imagem-logo {
      width: 130px;
      padding-top: 25px;
      padding-bottom: 15px;
      user-select: none;
      transition: 0.3s opacity, 0.5s visibility;
    }

    .menu-navegacao {
      padding: 25px 0;
    }

    .router-dom-links {
      text-decoration: none;
    }

    .menu-itens {
      display: flex;
      padding: 12.5px 0;
      height: 1.2em;

      &:hover {
        cursor: pointer;

        .menu-links-icones,
        .menu-links {
          color: #999;
        }
      }
    }

    .menu-links-icones-area {
      width: 15px;
      display: flex;
      justify-content: center;
    }

    .menu-links-icones {
      color: #fff;
      transition: 0.5s color;
    }

    .menu-links {
      height: 100%;
      margin-left: 15px;
      color: #fff;
      user-select: none;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      transition: 0.5s color, 0.3s opacity, 0.5s visibility;
    }
  }

  .conteudo {
    padding-left: 230px;
    width: calc(100% - 230px);
    min-height: 100%;
    background: #333;
    transition: 0.5s;
  }

  .menu-principal-fechado {
    width: 18px;
    padding: 0 15px;

    .imagem-logo-fechado {
      opacity: 0;
      visibility: hidden;
    }

    .menu-links-icones-fechado {
      margin-right: 0;
    }

    .menu-links-fechado {
      opacity: 0;
      visibility: hidden;
    }
  }

  .conteudo-fechado {
    padding-left: 48px;
    width: calc(100% - 48px);
  }
`;
