import { ITypeCard } from "../../Services";

interface ICard {
  id: number;
  image: string;
  author: string | null;
  title: string;
  length: string;
  type: ITypeCard;
}

export default ICard;