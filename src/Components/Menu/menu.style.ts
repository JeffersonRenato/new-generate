import styled from "styled-components";
import { color } from "../../Constants";

export const MenuWrapper = styled.div`
  display: flex;

  .menu {
    width: 200px;
    height: 100%;
    padding: 0 15px;
    position: fixed;
    z-index: 9;
    background: ${color.menuBackgound};
    overflow: hidden;
    transition: 0.5s;

    .menu-header {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-top: 10px;
    }

    .menu-header-icon {
      width: 14px;
      display: flex;
      justify-content: center;
    }

    .menu-hamburguer-icon {
      color: ${color.menuHamburguerIcon};
    }

    .menu-logo-image {
      width: 130px;
      padding-top: 25px;
      padding-bottom: 15px;
      user-select: none;
      transition: 0.3s opacity, 0.5s visibility;
    }

    .menu-navigation {
      padding: 25px 0;
    }

    .menu-router-dom-links {
      text-decoration: none;
    }

    .menu-items {
      display: flex;
      padding: 12.5px 0;
      height: 1.2em;

      &:hover {
        cursor: pointer;

        .menu-links-icons,
        .menu-links {
          color: ${color.menuLinksHover};
        }
      }
    }

    .menu-links-icons-area {
      width: 15px;
      display: flex;
      justify-content: center;
    }

    .menu-links-icons {
      color: ${color.menuLinksIcons};
      transition: 0.5s color;
    }

    .menu-links {
      height: 100%;
      margin-left: 15px;
      color: ${color.menuLinks};
      user-select: none;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      transition: 0.5s color, 0.3s opacity, 0.5s visibility;
    }
  }

  .content {
    padding-left: 230px;
    width: calc(100% - 230px);
    min-height: 100%;
    background: ${color.contentBackground};
    transition: 0.5s;
  }

  .menu-collapsed {
    width: 18px;
    padding: 0 15px;

    .menu-logo-image-collapsed {
      opacity: 0;
      visibility: hidden;
    }

    .menu-links-icons-collapsed {
      margin-right: 0;
    }

    .menu-links-collapsed {
      opacity: 0;
      visibility: hidden;
    }
  }

  .content-collapsed {
    padding-left: 48px;
    width: calc(100% - 48px);
  }
`;
