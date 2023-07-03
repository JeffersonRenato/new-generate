import CONTENT from "../constants/CONTENT";
import IContentResponse from "../types/IContentResponse";

class ServiceContent {
  getContent = (id:number) => {
    return new Promise<IContentResponse>((resolve) => {
      resolve(CONTENT[id]);
    });
  };
}

export default ServiceContent;