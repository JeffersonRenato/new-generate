import styled from "styled-components";
import { device, fontSize, getColor } from "../../Constants";

export const MenuWrapper = styled.div<{ theme: string }>`
  display: flex;
  /* user-select: none; */

  .menu {
    display: flex;
    flex-direction: column;
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
      transition: 0.5s;

      .menu-header-icon {
        width: 14px;
        display: flex;
        justify-content: center;

        .menu-hamburguer-icon {
          color: ${(props) => getColor(props.theme, "whiteLevel1")};
          transition: 0.5s;

          &:hover {
            cursor: pointer;
            color: ${(props) => getColor(props.theme, "grayLevel5")};
          }
        }
      }

      .menu-logo-image {
        width: 130px;
        padding-top: 25px;
        padding-bottom: 15px;
        /* user-select: none; */
        transition: 0.5s;

        &:hover {
          cursor: pointer;
        }
      }
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
      transition: 0.5s;
    }

    .menu-links {
      height: 100%;
      margin-left: 15px;
      color: ${(props) => getColor(props.theme, "whiteLevel1")};
      /* user-select: none; */
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      transition: 0.5s;
    }

    .menu-select-language-wrapper {
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: start;
      justify-content: end;
      margin-left: -6px;
      margin-bottom: 50px;

      .menu-select-language {
        width: auto;
        font-size: ${fontSize.minorText};
        color: ${(props) => getColor(props.theme, "whiteLevel1")};
        background: ${(props) => getColor(props.theme, "grayLevel2")};
        /* user-select: none; */

        &:hover {
          cursor: pointer;
        }
      }
    }

    .menu-footer-wrapper {
      display: flex;
      align-items: end;
      gap: 10px;
      padding-bottom: 10px;

      .menu-theme-toogle-wrapper {
        width: 18px;
        display: flex;
        align-items: center;
        justify-content: center;

        .menu-theme-toogle {
          font-size: ${fontSize.menuThemeToogle};
          color: ${(props) => getColor(props.theme, "whiteLevel1")};
          transition: 0.5s;

          &:hover {
            cursor: pointer;
            color: ${(props) => getColor(props.theme, "grayLevel5")};
          }
        }
      }

      .menu-footer-link {
        font-size: ${fontSize.description};
        color: ${(props) => getColor(props.theme, "whiteLevel1")};
        text-decoration: none;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        /* user-select: none; */
        margin-left: 20px;
        margin-bottom: 5px;
        transition: 0.5s;

        &:hover {
          color: ${(props) => getColor(props.theme, "grayLevel5")};
        }
      }
    }
  }

  .content {
    padding-left: 230px;
    width: calc(100% - 230px);
    min-height: 100%;
    padding-bottom: 75px;
    background: ${(props) => getColor(props.theme, "grayLevel2")};
    transition: 0.5s;
  }

  .menu-collapsed {
    width: 18px;

    .menu-logo-image {
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
    }

    .menu-links-icons {
      margin-right: 0;
    }

    .menu-links {
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
    }

    .menu-select-language {
      visibility: hidden;
      pointer-events: none;
    }

    .menu-footer-link {
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
    }
  }

  .content-collapsed {
    padding-left: 48px;
    width: calc(100% - 48px);
  }

  @media ${device.tablet}, ${device.mobile} {
    .menu {
      width: 18px;

      .menu-logo-image {
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
      }

      .menu-links-icons {
        margin-right: 0;
      }

      .menu-links {
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
      }

      .menu-select-language {
        visibility: hidden;
        pointer-events: none;
      }

      .menu-footer-link {
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
      }
    }

    .content {
      padding-left: 48px;
      width: calc(100% - 48px);
    }
  }
`;
