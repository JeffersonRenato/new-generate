import { FC, useState, useEffect } from "react";
import View from "./header.view";
import IMAGES from "./constants/IMAGES.json";

export interface IImageProps {
  index: number;
  src: string;
}

const Header: FC = () => {
  const [image, setImage] = useState<IImageProps>({ index: IMAGES[0].index, src: IMAGES[0].src });
  const [imageBack, setImageBack] = useState<IImageProps | null>(null);

  const updateImage = (image: IImageProps) => {
    setImageBack(image);
    setTimeout(() => {
      setImage(image);
      setImageBack(null);
    }, 1000);
  };

  const onClick = (image: IImageProps) => {
    updateImage({ index: image.index, src: image.src });
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log('\n');
  //     console.log('image.index', image.index);
  //     console.log('IMAGES.length', IMAGES.length);
      
  //     if ((image.index + 1) >= IMAGES.length) {
  //       console.log('entrou');
        
  //       updateImage(IMAGES[0]);
  //     } else {
  //       console.log('else');
  //       updateImage(IMAGES[image.index++]);
  //     }
  //   }, 5000);
  // }, [image.index]);

  return (
    <View 
      onClick={onClick} 
      imageSrc={image.src} 
      imageBackSrc={imageBack?.src || ""} 
      allImages={IMAGES} 
      hasBackgroundImage={!!imageBack}
    />
  );
};

export default Header;
