export default interface Article {
  attributes: {
    title: string;
    date: Date;
    description: string;
  };
  html: string;
  slug: string;
}
