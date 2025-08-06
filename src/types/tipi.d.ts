export type SlideType = {
 id: number;
  attributes: {
    Titolo: string;
    UrlLink: string;
    Image: {
      data: {
        attributes: {
          fullUrl: string;
        };
      };
    };
  };
};