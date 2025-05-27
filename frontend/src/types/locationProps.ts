export type LocationProps = {
  content: ContentItem[];
  isPortrait: (src: string) => boolean;
};

type ContentItem =
  | { type: "text"; value: string | React.ReactNode }
  | { type: "image"; value: string };
