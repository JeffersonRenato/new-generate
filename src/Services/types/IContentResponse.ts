interface IContentResponse {
  title: string;
  url: string;
  description: string;
  author: string | null;
  data: string;
  type: string;
  length: number;
  tags: Array<string> | null;
}

export default IContentResponse;
