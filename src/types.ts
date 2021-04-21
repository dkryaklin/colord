export type RgbColor = {
  r: number;
  g: number;
  b: number;
};

export type HslColor = {
  h: number;
  s: number;
  l: number;
};

export type HsvColor = {
  h: number;
  s: number;
  v: number;
};

export type HwbColor = {
  h: number;
  w: number;
  b: number;
};

export interface XyzColor {
  x: number;
  y: number;
  z: number;
}

export interface LabColor {
  l: number;
  a: number;
  b: number;
}

export interface LchColor {
  l: number;
  c: number;
  h: number;
}

type WithAlpha<O> = O & { a: number };
export type RgbaColor = WithAlpha<RgbColor>;
export type HslaColor = WithAlpha<HslColor>;
export type HsvaColor = WithAlpha<HsvColor>;
export type HwbaColor = WithAlpha<HwbColor>;
export type XyzaColor = WithAlpha<XyzColor>; // Naming is the hardest part https://stackoverflow.com/a/2464027
export type LabaColor = LabColor & { alpha: number };
export type LchaColor = WithAlpha<LchColor>;

export type ObjectColor =
  | RgbColor
  | RgbaColor
  | HslColor
  | HslaColor
  | HsvColor
  | HsvaColor
  | HwbColor
  | HwbaColor
  | XyzColor
  | XyzaColor
  | LabColor
  | LabaColor
  | LchColor
  | LchaColor;

export type AnyColor = string | ObjectColor;

export type InputObject = Record<string, unknown>;

export type Input = string | InputObject;

export type Parser<I extends Input> = (input: I) => RgbaColor | null;

export type Parsers = {
  string: Array<Parser<string>>;
  object: Array<Parser<InputObject>>;
};
