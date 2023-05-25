import ITypeCard from "./ITypeCard";

interface ICard {
  id: number;
  image: string;
  author: string | null;
  title: string;
  length: string;
  type: ITypeCard;
}

export default ICard;
