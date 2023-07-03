import { useParams } from "react-router-dom";
import View from "./content.view";
import { FC, useState, useEffect, useMemo } from "react";
import { IContentResponse } from "../../Services";
import ServiceContent from "../../Services/content/content.service";

const Content: FC = () => {
  const { id } = useParams();
  const [content, setContent] = useState<IContentResponse | null>(null);

  const serviceContent = useMemo(() => new ServiceContent(), []);

  const getContent = () => {
    if (!id || isNaN(parseInt(id))) return;

    serviceContent.getContent(parseInt(id)).then((content) => {
      setContent(content);
    });
  };

  useEffect(getContent, [id]);

  const checkType = (type: string) => {
    switch (type) {
      case "VIDEO":
        return "Vídeo";
      case "AUDIO":
        return "Áudio";
      case "TEXT":
        return "Texto";
      default:
        return type;
    }
  };

  const formatedType = checkType(content?.type || "");

  return <View content={content} formatedType={formatedType} />;
};

export default Content;
