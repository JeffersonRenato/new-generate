interface IContentResponse {
  title: string;
  url: string;
  description: string;
  author: string;
  data: string;
  type: string;
  length: number;
  tags: Array<string> | null;
}

export default IContentResponse;
