import styled from "styled-components";
import { getColor } from "../../Constants";

export const MenuWrapper = styled.div<{ theme: string }>`
  display: flex;

  .menu {
    width: 200px;
    height: 100%;
    padding: 0 15px;
    position: fixed;
    z-index: 9;
    background: ${(props) => getColor(props.theme, "grayLevel1")};
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
      color: ${(props) => getColor(props.theme, "whiteLevel1")};
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
          color: ${(props) => getColor(props.theme, "grayLevel5")};
        }
      }
    }

    .menu-links-icons-wrapper {
      width: 15px;
      display: flex;
      justify-content: center;
    }

    .menu-links-icons {
      color: ${(props) => getColor(props.theme, "whiteLevel1")};
      transition: 0.5s color;
    }

    .menu-links {
      height: 100%;
      margin-left: 15px;
      color: ${(props) => getColor(props.theme, "whiteLevel1")};
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
    background: ${(props) => getColor(props.theme, "grayLevel2")};
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
