export const isHornseyPortrait = (src: string): boolean => {
  return [
    "Music_studio_Hornsey_06",
    "Music_studio_Hornsey_04",
    "Music_studio_Hornsey_03",
    "Music_studio_Hornsey_02",
  ].some((k) => src.includes(k));
};

export const isHackneyPortrait = (src: string): boolean => {
  return ["Music_studio_Hackney_07", "Music_studio_Hackney_09"].some((k) =>
    src.includes(k)
  );
};

export const isLeaPortrait = (src: string): boolean => {
  return ["Music_studio_Leyton_04", "Music_studio_Leyton_05"].some((k) =>
    src.includes(k)
  );
};

export const isArchwayPortrait = (src: string): boolean => {
  return [
    "Music_studio_Archway_01",
    "Music_studio_Archway_02",
    "Music_studio_Archway_03",
    "Music_studio_Archway_07",
    "Music_studio_Archway_10",
  ].some((k) => src.includes(k));
};

export const isFinsburyPortrait = (src: string): boolean => {
  return [
    "Music_studio_Finsbury_05",
    "Music_studio_Finsbury_06",
    "Music_studio_Finsbury_07",
  ].some((k) => src.includes(k));
};
