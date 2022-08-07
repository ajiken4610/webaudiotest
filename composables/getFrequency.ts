export default (name: string, turning: number = 440) => {
  const a4 = 48;
  const cTob = [-9, -7, -5, -4, -2, 0, 2][
    "cdefgab".indexOf(name.substring(0, 1))
  ];
  const place = parseInt(name.substring(1, 2));
  const note =
    (name.substring(2, 3) === "_" ? cTob + place * 12 + 1 : cTob + place * 12) -
    a4;
  return turning * Math.pow(2, note / 12);
};

export const getNoteIndex = (name: string) => {
  const a4 = 48;
  const cTob = [-9, -7, -5, -4, -2, 0, 2][
    "cdefgab".indexOf(name.substring(0, 1))
  ];
  const place = parseInt(name.substring(1, 2));
  const note =
    (name.substring(2, 3) === "_" ? cTob + place * 12 + 1 : cTob + place * 12) -
    a4;
  return note;
};

export const getNoteName = (note: number) =>
  "aabccddeffgg".charAt((note + 120) % 12) +
  (Math.floor((note - 3) / 12) + 5) +
  " _  _ _  _ _".charAt((note + 120) % 12);
