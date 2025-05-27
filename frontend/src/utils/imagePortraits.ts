export const isHornseyPortrait = (src: string): boolean => {
  return ["hornsey6", "hornsey4", "hornsey3", "hornsey2"].some((k) =>
    src.includes(k)
  );
};
