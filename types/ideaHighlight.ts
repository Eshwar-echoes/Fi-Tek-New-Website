export interface IdeaPoint {
  id: string;
  title: string;
  description?: string;
}

export interface IdeaHighlightContent {
  title: string;
  subtitle?: string[];

  image: {
    src: string;
    alt: string;
  };

  points: IdeaPoint[];
}
