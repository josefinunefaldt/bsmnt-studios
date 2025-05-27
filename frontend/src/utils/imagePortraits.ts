export const isHornseyPortrait = (src: string): boolean => {
  return ["hornsey6", "hornsey4", "hornsey3", "hornsey2"].some((k) =>
    src.includes(k)
  );
};

export const isHackneyPortrait = (src: string): boolean => {
  return ["hackney6", "hackney1", "hackney3", "hackney2"].some((k) =>
    src.includes(k)
  );
};

export const isLeaPortrait = (src: string): boolean => {
  return ["lea6", "lea1", "lea3", "lea2"].some((k) => src.includes(k));
};

export const isArchwayPortrait = (src: string): boolean => {
  return ["archway6", "archway2", "archway3", "archway4"].some((k) =>
    src.includes(k)
  );
};

export const isFinsburyPortrait = (src: string): boolean => {
  return ["finsbury1", "finsbury2", "finsbury3", "finsbury4"].some((k) =>
    src.includes(k)
  );
};
