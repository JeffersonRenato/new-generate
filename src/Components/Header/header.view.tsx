import { FC } from "react";
import "./header.style.scss";
import { IImageProps } from "./header.controller";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

interface IProps {
  onClick: (image: IImageProps) => void;
  imageSrc: string;
  imageBackSrc: string;
  allImages: IImageProps[];
  hasBackgroundImage: boolean;
}

const View: FC<IProps> = ({ onClick, imageSrc, imageBackSrc, allImages, hasBackgroundImage }) => (
  <div className="header-wrap">
    <div className="images-header-area">
      <img className={`selected-image ${hasBackgroundImage ? 'opacity': ''}`} src={imageSrc} />
      <img className="background-image" src={imageBackSrc} />
    </div>
    <div className="pagination-header-area">
      {allImages.map((image, index) => (
        <FontAwesomeIcon key={index} onClick={() => onClick(image)} icon={faCircle} className="pagination-header" />
      ))}
    </div>
  </div>
);

export default View;
