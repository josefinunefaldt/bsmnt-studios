export const isHornseyPortrait = (src: string): boolean => {
  return ["hornsey6", "hornsey4", "hornsey3", "hornsey2"].some((k) =>
    src.includes(k)
  );
};

export const isHackneyPortrait = (src: string): boolean => {
  return ["hackney7", "hackney9"].some((k) => src.includes(k));
};

export const isLeaPortrait = (src: string): boolean => {
  return ["lea6", "lea1", "lea3", "lea2"].some((k) => src.includes(k));
};

export const isArchwayPortrait = (src: string): boolean => {
  return ["archway1", "archway2", "archway3", "archway7", "archway10"].some(
    (k) => src.includes(k)
  );
};

export const isFinsburyPortrait = (src: string): boolean => {
  return ["finsbury5", "finsbury6", "finsbury7"].some((k) => src.includes(k));
};
